import "./HomePage.css";
import mafia from "../assets/mafia1.jpg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { collection,addDoc } from "firebase/firestore";
import db from "../services/firebaseConfig";
import "./GenerateCode.css";
import { useDispatch } from "react-redux";
import { createRoom } from "../services/roomSlice";

export default function GenerateCode(){
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [generatedCode, setGeneratedCode] = useState(null);
    const [OTP1, setOTP1] = useState("");
    const [OTP2, setOTP2] = useState("");
    const [OTP3, setOTP3] = useState("");
    const [OTP4, setOTP4] = useState("");
    let roomCode = "";

                                  
    function handleGeneratedCode(){
        console.log('hi');
        const randomCode = Math.floor(1000 + Math.random() * 9000); // Generates a 4-digit random number
        console.log(randomCode);
        roomCode =randomCode.toString();
        setGeneratedCode(randomCode.toString());
        setOTP1(roomCode[0]);
        setOTP2(roomCode[1]);
        setOTP3(roomCode[2]);
        setOTP4(roomCode[3]);
        dispatch(createRoom({roomCode: roomCode}));
        handleCreateGameRoom(randomCode.toString());
        
    }
    
    useEffect(()=>{
        console.log(1);
        handleGeneratedCode();
    },[])

    async function handleCreateGameRoom(randomCode){
        try{
            const createCollection = collection(db,randomCode);
            console.log('collection created',createCollection.id);
        }
        catch(e){
            console.log('error, no able to create',e);
        }
    }


   function changeToPlayerPage(){
        navigate('/startGame');
   }

    return(
        <>  
            <div className="header-container">
                <div className="fullscreen-background">
                <img src={mafia} className="fullscreen-image"/>
                <div className="header-buttons">
                <div className="otp-container">
                        <form className="otp-form">
                                <input type="text" maxLength="1" className="otp-input" readOnly value={OTP1} />
                                <input type="text" maxLength="1" className="otp-input" readOnly value={OTP2}/>
                                <input type="text" maxLength="1" className="otp-input" readOnly value={OTP3} />
                                <input type="text" maxLength="1" className="otp-input" readOnly value={OTP4}/>
                       </form>
                                      
                </div>
                <br></br>     
                <div className="button-group">
                            <button className="header-button" onClick={changeToPlayerPage}>
                                Start Game
                            </button>
                            <button className="header-button icon-button" onClick={handleGeneratedCode}>
                                Regenerate
                            </button>
                            
                        </div>
                    
                    <br></br>
                    
                </div>
                </div>
            </div>
        </>
    );
}