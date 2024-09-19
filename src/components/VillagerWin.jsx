import win from "../assets/villagerWin.jpg";
import "./HomePage.css";
import mafia from "../assets/mafia1.jpg"

export default function VillagerWin(){
    return(
        <>
            <div className="header-container">
                <div className="fullscreen-background">
                    <img src={mafia} className="fullscreen-image"/>
                    <div className="header-buttons">
                        <h2 color="white">Village Wins!!</h2>
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