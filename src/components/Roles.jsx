import "./RolesScreen.css";
import "./HomePage.css";
import GetPlayerList from "../services/getPlayerList";
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import db from "../services/firebaseConfig";
import { query,collection, where, getDocs } from "firebase/firestore";


export default function Roles(props){

    const playerList = GetPlayerList();
    const [selectedPlayer, setSelectedPlayer] = useState(null);
    const [policeCheckMafiaMessage, setPoliceCheckMafiaMessage] = useState("");

    const playerDetails = useSelector((state)=>(state.room.playerData));

    const gameRoom = useSelector((state)=>(state.room.currentRoom.roomCode));
    const mafiasList = useSelector((state) => (state.shared.mafiaList));
    const doctorList = useSelector((state) => (state.shared.doctorList));
    const policeList = useSelector((state) => (state.shared.policeList));
    const [isClicked, setIsClicked] = useState(false);
    let mafiaWantsToKill = {};
    let doctorWishToSave ={};


    function handleSelectedPlayer(player){

        
        setSelectedPlayer(player.id);
        console.log(player.name, player.id);
        console.log(playerDetails);
        console.log(gameRoom);
        console.log(mafiasList,'doc',doctorList,'pol',policeList);
        
        
        if(playerDetails.role === 'Police'){
            if(mafiasList.some(mafia => mafia.id === player.id)){
                console.log('You have found the Mafia!');
                setPoliceCheckMafiaMessage("You have found the Mafia!!!");
            }
            else{
                console.log('Nope! Wrong CHoice',playerDetails.role, mafiasList);
                setPoliceCheckMafiaMessage("Oops, Wrong Choice!!!");
            }
        }
        console.log(doctorWishToSave, 'player to save');
        console.log(mafiaWantsToKill,'mafia want to kill');



        if(playerDetails.role === 'Mafia'){
            mafiaWantsToKill = player.id;
            console.log(mafiaWantsToKill,123);
            console.log(mafiasList);

        }
        if(playerDetails.role === 'Doctor'){
            doctorWishToSave = player.id;
            console.log(doctorWishToSave,345);
        }
    }

    

    useEffect(()=>{
        console.log('hello');
    },[])


    return(

        <>
            <h2 className="doctor-page-header">{props.heading}</h2>
                    <div className="container">
                        <div className="image-selection">
                            <img src={props.image}/>
                        </div>
                        <div className="description-section">
                            <h2>{props.title}</h2>
                            <p>
                            {props.description}
                            <br></br><br></br>
                            {props.description1}
                            <br></br><br></br>
                            
                                {playerList.map((player) => {
                                    if(playerDetails.id !== player.id && player.id !== 'roleLists'){
                                        const otherMafia = player.role === 'Mafia';
                                        const playerIsMafia = playerDetails.role === 'Mafia';
                                        const isVillager = playerDetails.role === 'Villager';
                                        return(
                                          <button className={`player-button ${otherMafia && playerIsMafia?'darker':''}${selectedPlayer === player.id ? "selected" : ""}`} disabled={ (otherMafia && playerIsMafia) || isVillager} key={player.id} onClick={()=>handleSelectedPlayer(player)}>{player.name}</button>

                                     );
                                    }
                                    
                                })}
                               
                            
                            </p>
                            <h3>{policeCheckMafiaMessage}
                                </h3> 
                        </div>
                    </div>
            
        </>
    );
}