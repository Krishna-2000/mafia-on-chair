import "./HomePage.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import mafia from "../assets/mafia1.jpg";


export default function Loading(){
    
    const currentRoom = useSelector((state) => state.room.currentRoom);
    const playerDetails = useSelector((state) => state.room.playerData);

    useEffect(() => {
        console.log('Component mounted');
        console.log(playerData);
        return () => {
          console.log('Component unmounted');
        };
      }, []);

    return(
        <>
            <div className="header-container">
                <div className="fullscreen-background">
                <img src={mafia} className="fullscreen-image"/>
                <div className="header-buttons">
                    Loafing
                    </div>
                </div>
            </div>
        </>
    );
}