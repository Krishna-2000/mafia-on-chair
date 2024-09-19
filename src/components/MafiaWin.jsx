import win from "../assets/mafiaWin.jpg";
import "./HomePage.css";
import mafia from "../assets/mafia1.jpg"

export default function MafiaWin(){
    return(
        <>
            <div className="header-container">
                <div className="fullscreen-background">
                    <img src={mafia} className="fullscreen-image"/>
                    <div className="header-buttons">
                        <h2 color="white">Mafia Wins!!</h2>
                    <div className="container">
                        <div className="image-selection">
                            <img src={win}/>
                        </div>
                        
                    </div>
                    
                </div>
                </div>
            </div>
        </>
    );
}