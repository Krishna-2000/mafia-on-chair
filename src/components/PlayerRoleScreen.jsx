import "./HomePage.css";
import mafia from "../assets/mafia1.jpg";
import "./RolesScreen.css";
import Roles from "./Roles";
import {roleScreenData} from "../data/roles";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function PlayerRoleScreen(){

    const playerDetails = useSelector((state => state.room.playerData));
    const role = roleScreenData.find(role => role.role === playerDetails.role);


    useEffect(() => {
        console.log(playerDetails.role);
        
    }, [playerDetails.role]); // Add playerDetails.role to dependency array

    
    return(
        <>
            
            <div className="header-container">
                <div className="fullscreen-background">
                    <img src={mafia} className="fullscreen-image"/>
                    <div className="header-buttons">
                   
                        <li>
                            {role &&
                                 <Roles
                                 image={role.image}
                                 heading={role.heading}
                                 title={role.title}
                                 description={role.description}
                                 description1={role.description1}
                             />
                            }
                        
                        </li>    
                    </div>
                </div>
            </div>
        </>
    );
}