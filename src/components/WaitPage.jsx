import "./HomePage.css";
import mafia from "../assets/mafia1.jpg";
import "./WaitPage.css";
import { collection, doc, updateDoc, writeBatch, onSnapshot, getDoc, setDoc } from "firebase/firestore";
import db from "../services/firebaseConfig";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDoctorList, setMafiaList, setPoliceList } from '../services/sharedSlice';
import { setPlayerData } from "../services/roomSlice";
import { useNavigate } from "react-router-dom";
import { resetGameState } from "../services/sharedSlice";

export default function WaitPage() {
    const [playerList, setPlayerList] = useState([]); // Store fetched player data
    const [playersWithRoles, setPlayersWithRoles] = useState([]);
    const currentRoom = useSelector((state) => state.room.currentRoom);
    const playerDetails = useSelector((state) => state.room.playerData);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const gameRoom = currentRoom.roomCode;
    const numMafias = useSelector((state) => state.room.noOfMafias);

    // Fetch players when the component loads
    useEffect(() => {
        if (gameRoom) {
            const unsubscribe = onSnapshot(collection(db, gameRoom), (snapshot) => {
                const players = [];
                snapshot.forEach((doc) => {
                    players.push({ id: doc.id, name: doc.data().name, role: doc.data().role || 'Not Assigned' });
                });
                setPlayerList(players); // Update the player list in real-time
            });
            
            return () => unsubscribe(); // Cleanup listener on component unmount
        }
    }, [gameRoom]);

    useEffect(() => {
        if (playerDetails.id && gameRoom && !playerDetails.isHost) {
            const playerDocRef = doc(db, gameRoom, playerDetails.id);
            const unsubscribe = onSnapshot(playerDocRef, (doc) => {
                if (doc.exists()) {
                    const playerData = doc.data();
                    if (playerData.gameStarted) {
                        // Update Redux with the player's role
                        const updatedPlayerData = { ...playerDetails, role: playerData.role };
                        dispatch(setPlayerData(updatedPlayerData));
                        navigate('/playerRoleScreen');
                    }
                }
            });

            return () => unsubscribe(); // Cleanup the listener on unmount
        }
    }, [playerDetails.id, gameRoom, dispatch, navigate]);

    // Fetch global role lists when the component loads
    useEffect(() => {
        if (gameRoom) {
            const unsubscribe = onSnapshot(doc(db, gameRoom, 'roleLists'), (doc) => {
                if (doc.exists()) {
                    const roleLists = doc.data();
                    dispatch(setMafiaList(roleLists.mafiaList || []));
                    dispatch(setDoctorList(roleLists.doctorList || []));
                    dispatch(setPoliceList(roleLists.policeList || []));
                }
            });

            return () => unsubscribe(); // Cleanup the listener on component unmount
        }
    }, [gameRoom, dispatch]);

    // Assign roles and update Firestore when the host clicks "Start Game"
    async function handleContinue() {
        try {

            dispatch(resetGameState());

            const playersWithRoles = assignRoles(playerList); // Assign roles to players
            setPlayersWithRoles(playersWithRoles);

            const batch = writeBatch(db);
            
            // Update Firestore documents with assigned roles and gameStarted = true
            playersWithRoles.forEach(({ player, role }) => {
                const playerDocRef = doc(db, gameRoom, player.id);
                batch.update(playerDocRef, { role, gameStarted: true });
            });

            // Update global role lists
            const mafiaList = playersWithRoles.filter(({ role }) => role === 'Mafia').map(({ player }) => player);
            const doctorList = playersWithRoles.filter(({ role }) => role === 'Doctor').map(({ player }) => player);
            const policeList = playersWithRoles.filter(({ role }) => role === 'Police').map(({ player }) => player);

            // Store role lists in Firestore
            const roleListsRef = doc(db, gameRoom, 'roleLists');
            await setDoc(roleListsRef, {
                mafiaList,
                doctorList,
                policeList
            });

            await batch.commit();

            // Update Redux store with player role for the current user
            playersWithRoles.forEach(({ player, role }) => {
                if (playerDetails.id === player.id) {
                    const playerDataWithId = { ...playerDetails, role };
                    dispatch(setPlayerData(playerDataWithId));
                }
            });

            navigate('/playerRoleScreen');

        } catch (e) {
            console.error("Error starting the game:", e);
        }
    }

    // Assign Mafia, Doctor, Police roles and the rest as Villagers
    function assignRoles(players) {
        const roles = ['Mafia', 'Doctor', 'Police'];
        const shuffledPlayers = [...players];

        // Shuffle the players array to randomize assignments
        for (let i = shuffledPlayers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledPlayers[i], shuffledPlayers[j]] = [shuffledPlayers[j], shuffledPlayers[i]];
        }

        // Ensure valid number of mafias
        const numPlayers = shuffledPlayers.length;
        const mafiaCount = Math.min(numPlayers, numMafias);
        
        // Assign Mafia roles to the first `numMafias` players
        const assignedRoles = shuffledPlayers.slice(0, mafiaCount).map(player => ({
            player,
            role: 'Mafia',
        }));
        
        // Assign Doctor and Police roles to the next two players (if available)
        const remainingPlayers = shuffledPlayers.slice(mafiaCount);
        const rolesToAssign = roles.slice(1); // Doctor and Police
        
        const remainingRoles = remainingPlayers.slice(0, rolesToAssign.length).map((player, index) => ({
            player,
            role: rolesToAssign[index],
        }));
        
        // Assign Villager role to the remaining players
        const villagers = remainingPlayers.slice(rolesToAssign.length).map(player => ({
            player,
            role: 'Villager',
        }));

        return [...assignedRoles, ...remainingRoles, ...villagers];
    }

    // Render the player list and the "Start Game" button if the user is the host
    return (
        <>
            <div className="header-container">
                <div className="fullscreen-background">
                    <img src={mafia} className="fullscreen-image" alt="Background" />
                    <div className="header-buttons">
                        <h2 className="wait-page-header">Waiting For Players...</h2>
                        <div className="wait-page-header">
                            <ul>
                                {playerList.length > 0 ? (
                                    playerList.map((player) => (
                                        <li key={player.id}>
                                            {player.name}
                                        </li>
                                    ))
                                ) : (
                                    <li>No players found</li>
                                )}
                            </ul>
                        </div>
                        <br />
                        {playerDetails.isHost && (
                            <div>
                                <button className="header-button" onClick={handleContinue}>Start Game</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
