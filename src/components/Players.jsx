import "./HomePage.css";
import mafia from "../assets/mafia1.jpg";
import "./WaitPage.css";
import "./Players.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { collection } from "firebase/firestore";
import db from "../services/firebaseConfig";
import { addDoc } from "firebase/firestore";
import { setPlayerData } from '../services/roomSlice';


export default function Players(){
    
    const navigate = useNavigate('');
    const [name,setName] = useState('');  
    const currentRoom = useSelector((state) => state.room.currentRoom);
    let gameRoom = "";
    const location = useLocation();
    const {noOfMafia, noOfPlayers} = location.state || {};
    const dispatch = useDispatch();
    

    function handleToWaitPage(){
        console.log(name);
        
        const playerData = {
            name: name,
            role:"",
            isAlive:true,
            isHost: !!location.state,
            gameStarted:false
        }
        // console.log(isHost);
        // dispatch(setPlayerData(playerData));
        
        addNewPlayerToGameRoom(playerData);
        
    }

    async function addNewPlayerToGameRoom(playerData){
        
        gameRoom = currentRoom.roomCode;
        console.log(gameRoom);
        try{
            const docRef = await addDoc(collection(db,gameRoom),playerData);
            console.log(docRef.id);
            const playerDataWithId = { ...playerData, id: docRef.id };
            dispatch(setPlayerData(playerDataWithId));

            navigate('/waitingPage');

        }
        catch(e){
            console.error('error');
        }




        
    }
    // function testfunction(){
        
    //     console.log(currentRoom.roomCode);
    // }

    return(
        <>
            List of Players
            123
            <div className="header-container">
                <div className="fullscreen-background">
                <img src={mafia} className="fullscreen-image"/>
                <div className="header-buttons">
                    <div className="player-container">
                        
                        <div className="player-form">
                            <div>
                            <label><b>Your Name</b></label>
                            </div>
                            <br></br>
                            {/* <button onClick={()=>addNewPlayerToGameRoom(name)}>check</button> */}
                            <input className="player-name-input" value={name} type="text"  required onChange={(e)=>setName(e.target.value) }/>
                        </div>
                        <br></br>
                    </div>
                        <button className="header-button" onClick={handleToWaitPage}>Continue</button>
                        
                    </div>
                </div>
            </div>
        </>
    );
}