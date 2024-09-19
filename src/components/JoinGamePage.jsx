import "./JoinGamePage.css";
import mafia from "../assets/mafia1.jpg";
import "./HomePage.css";
import { useRef } from "react";
import { collection, getDoc, getDocs } from "firebase/firestore";
import connectFireBase from "../services/firebaseConfig";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createRoom } from "../services/roomSlice";

export default function JoinGamePage(){

    const navigate = useNavigate();
    const inputsRef = [useRef(null), useRef(null), useRef(null), useRef(null)];
    const [errorNote, setErrorNote] = useState(false);
    const dispatch = useDispatch();

    let showError = "";

    if(errorNote){
        showError = "The game room cannot be found!";
    }

    async function fetchData(gameCode) {
        // console.log('there');
        console.log(gameCode);
        console.log('uuuttt');
      
        try{
            const getGameRoomCollection = collection(connectFireBase,gameCode);
            const getGameRoom = await getDocs(getGameRoomCollection);
            
            // console.log(getGameRoom);
            if (getGameRoom.empty) {
                console.log(`No room found with the game code: ${gameCode}`);
                inputsRef.forEach(ref=>{
                    if(ref.current){
                        ref.current.value="";
                    }
                })
                setErrorNote(true);
                inputsRef[0].current.focus();
            }
            else{
                getGameRoom.forEach((doc)=>{
                    console.log(`${doc.id} => ${JSON.stringify(doc.data().name)}`);
                });
                dispatch(createRoom({roomCode: gameCode}));
                console.log(gameCode,'hi');
                navigate('/players');
                
          
            }
            
        }
        catch(e){
            console.log('errro');
        }
        
    };

    function handleInputOTP(e,index){
        // console.log(nextInput);
        const { value, maxLength } = e.target;
        
        // Move focus to the next input if the current input is filled
        if (value.length >= maxLength && index < inputsRef.length - 1) {
            inputsRef[index + 1].current.focus();
        }
        // Optionally handle focus for backspace
        if (value.length === 0 && index > 0) {
            inputsRef[index - 1].current.focus();
        }
        
            const values = inputsRef.map(ref => ref.current.value).join('');
            console.log('Input values:', values);
            // console.log(values.length);
         
            if(values.length==4)
                fetchData(values);
         
           
    }

    return(
        <>
             <div className="header-container">
                <div className="fullscreen-background">
                <img src={mafia} className="fullscreen-image"/>
                <div className="header-buttons">
                <h2 className="join-game-header">Code to join the game!</h2>
                
                    <div className="otp-container">
                        
                    <form className="otp-form">
                                {inputsRef.map((ref, index) => (
                                    <input
                                        key={index}
                                        ref={ref}
                                        type="text"
                                        maxLength="1"
                                        className="otp-input"
                                        onChange={(e) => handleInputOTP(e, index)}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Backspace' && index > 0 && e.target.value === '') {
                                                inputsRef[index - 1].current.focus();
                                            }
                                        }}
                                        aria-label={`OTP input ${index + 1}`}
                                    />
                                ))}
                            </form>
                    </div>  
                    <p className="error-content">
                        {showError}
                    </p> 
                    
                    </div>
                </div>
            </div>

            
        </>
    );
}