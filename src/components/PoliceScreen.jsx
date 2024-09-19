import "./HomePage.css";
import mafia from "../assets/mafia1.jpg";
import "./RolesScreen.css"
import police from "../assets/polic.jpg"

export default function PoliceScreen(){
    return(
        <>
             <div className="header-container">
                <div className="fullscreen-background">
                    <img src={mafia} className="fullscreen-image"/>
                    <div className="header-buttons">
                    <h2 className="doctor-page-header">Wow! You are a Police!!</h2>
                    <div className="container">
                        <div className="image-selection">
                            <img src={police}/>
                        </div>
                        <div className="description-section">
                            <h2>Who do you suspect to be a mafia?</h2>
                            <p>
                            You need to find and eliminate the Mafia members. You will have the ability to investigate one player each night to determine if they are a member of the Mafia or not.
                            <br></br><br></br>
                            Choose your suspect from the player list.
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