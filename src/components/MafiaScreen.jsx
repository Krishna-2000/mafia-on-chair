import "./HomePage.css";
import mafia from "../assets/mafia1.jpg";
import "./RolesScreen.css"
import mafiacard from "../assets/mafia.jpg"

export default function MafiaScreen(){
    return(
        <>
            
            <div className="header-container">
                <div className="fullscreen-background">
                    <img src={mafia} className="fullscreen-image"/>
                    <div className="header-buttons">
                    <h2 className="doctor-page-header">Wow! You are the Mafia!!</h2>
                    <div className="container">
                        <div className="image-selection">
                            <img src={mafiacard}/>
                        </div>
                        <div className="description-section">
                            <h2>Who do you wish to Kill?</h2>
                            <p>
                            You have to eliminate all other players and take control of the game. Each night, Mafia collectively decides on one player to eliminate. You must work together with your partner if any to avoid detection and deception.
                            <br></br><br></br>
                            Choose a candidate from below to Kill.
                            <br></br><br></br>
                            <li>
                                <button className="player-button" >Rima</button>
                                <button className="player-button" >Krishna</button>
                                <button className="player-button" >Poonam</button>
                                <button className="player-button" >Sandhya</button>
                                <button className="player-button" >Deepak</button>
                                <button className="player-button" >Hisham</button>
                                <button className="player-button" >Asif</button>
                            </li>
                                
                            
                            </p>
                        </div>
                    </div>
                    
                </div>
                </div>
            </div>
        </>
    );
}