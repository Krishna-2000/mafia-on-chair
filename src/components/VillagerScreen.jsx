import "./HomePage.css";
import mafia from "../assets/mafia1.jpg";
import "./RolesScreen.css"
import villager from "../assets/villager.jpg"

export default function VillagerScreen(){
    return(
        <>
              
              <div className="header-container">
                <div className="fullscreen-background">
                    <img src={mafia} className="fullscreen-image"/>
                    <div className="header-buttons">
                    <h2 className="doctor-page-header">Wow! You are a Villager!!</h2>
                    <div className="container">
                        <div className="image-selection">
                            <img src={villager}/>
                        </div>
                        <div className="description-section">
                            <h2>How to play as a villager?</h2>
                            <p>
                            Your goal is to help the Town (or the non-Mafia members) identify and eliminate the Mafia members. You need to ensure that the Town survives and thrives by working together to uncover the identities of the enemies.
                            <br></br><br></br>
                            Below are the participants of the game.
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