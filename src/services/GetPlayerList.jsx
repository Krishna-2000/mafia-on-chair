import { useEffect, useState } from 'react';
import { onSnapshot, collection } from 'firebase/firestore';
import db from './firebaseConfig';
import { useSelector } from 'react-redux';

export default function GetPlayerList(){

    const currentRoom = useSelector((state) => state.room.currentRoom);
    const gameRoom = currentRoom.roomCode;
    const [playerList, setPlayerList] = useState([]);
    
    useEffect(() => {
        if (!gameRoom) return;

        const unsubscribe = onSnapshot(collection(db, gameRoom), (snapshot) => {
            const players = [];
            snapshot.forEach((doc) => {
                players.push({ id: doc.id, name: doc.data().name, role: doc.data().role || 'Not Assigned' });
            });
            setPlayerList(players);
        });

        return () => unsubscribe();
    }, [gameRoom]);

    return playerList;
    
}