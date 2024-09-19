import "./HomePage.css";
import mafia from "../assets/mafia1.jpg";
import "./StartGamePage.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setNumOfMafias } from "../services/roomSlice";


export default function StartGamePage(){

    const navigate = useNavigate();
    const [noOfPlayers, setNoOfPlayers] = useState(0);
    const [noOfMafia, setNoOfMafia] = useState(0);
    const dispatch = useDispatch();

    function handleContinue(){
        dispatch(setNumOfMafias(noOfMafia));
        navigate('/players',{state: {noOfPlayers:noOfPlayers,noOfMafia:noOfMafia}});
    }

    return(
        <>
            <div className="header-container">
                <div className="fullscreen-background">
                <img src={mafia} className="fullscreen-image"/>
                <div className="header-buttons">
                    <div className="start-game-container">
                        
                        <div className="star-game-form">
                            <label>Number of Players</label>
                            <input className="start-input" type="text" required onChange={(e) => setNoOfPlayers(e.target.value)} />
                        </div>
                        <div className="star-game-form">
                            <label>Number of Mafia</label>
                            <input className="start-input" type="text" required onChange={(e) => setNoOfMafia(e.target.value)} />
                        </div>
                        
                    </div><br></br>
                        <button className="header-button" onClick={handleContinue}>Continue</button>
                        
                        
                    
                    <br></br>
                </div>
            </div>
            <div>
        
            
                generate code for joining and button for generating codes

                <br>
                </br>
                button for starting the game
            </div>
           </div>
        </>
    );
}