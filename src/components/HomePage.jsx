import { useNavigate } from "react-router-dom";
import Header from "./Header.jsx";
import "./HomePage.css";
import mafia from "../assets/mafia1.jpg";

import { getFirestore, collection, getDocs } from "firebase/firestore"; 
import connectFireBase from "../services/firebaseConfig.js";
import { useEffect } from "react";

export default function HomePage(){


    // const db = getFirestore(connectFireBase);

    // async function fetchData() {
    //     const querySnapshot = await getDocs(collection(db, "PlayerList"));
    //     querySnapshot.forEach((doc) => {
    //     console.log(`${doc.id} => ${JSON.stringify(doc.data().Name)}`);
    //     });
    // };

    // useEffect(() => {
    //     // Code to run when the component is mounted
    //     console.log('Component mounted');
    //     fetchData();
    //     // Optional: Return a cleanup function if needed
    //     return () => {
    //       console.log('Component unmounted');
    //     };
    //   }, []);

    const navigate = useNavigate();

    function handleStartGame(){
        navigate("/generateCode");
    }
    function handleJoinGame(){
        navigate("/joinGame");
    }
    return(
        <>
            <div className="header-container">
                <div className="fullscreen-background">
                <img src={mafia} className="fullscreen-image"/>
                <div className="header-buttons">
                    <button className="header-button" onClick={handleStartGame}>Start Game</button>
                    <br></br>
                    <button className="header-button" onClick={handleJoinGame}>Join Game</button>
                </div>
                </div>
            </div>
        </>
    );
}