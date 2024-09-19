import "./HomePage.css";
import mafia from "../assets/mafia1.jpg";
import "./RolesScreen.css"
import doctor from "../assets/doctor.jpg"

export default function DoctorScreen(){
    return(
        <>
           
           <div className="header-container">
                <div className="fullscreen-background">
                    <img src={mafia} className="fullscreen-image"/>
                    <div className="header-buttons">
                    <h2 className="doctor-page-header">Wow! You are the Doctor!!</h2>
                    <div className="container">
                        <div className="image-selection">
                            <img src={doctor}/>
                        </div>
                        <div className="description-section">
                            <h2>Who do you wish to save?</h2>
                            <p>
                            Your duty is to protect the Town from being eliminated by the Mafia. You can choose one player each night to protect from the mafia.
                            <br></br><br></br>
                            Choose a candidate from below to save, you can also choose yourself.
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