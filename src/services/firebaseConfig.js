// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbJDybWXG_TRqAlGk5n8gM8kz2g9jmAJQ",
  authDomain: "mafia-app-21491.firebaseapp.com",
  projectId: "mafia-app-21491",
  storageBucket: "mafia-app-21491.appspot.com",
  messagingSenderId: "614057546302",
  appId: "1:614057546302:web:9289ce652a6125593b376f"
};

// Initialize Firebase
const connectFireBase = initializeApp(firebaseConfig);

const db = getFirestore(connectFireBase);


export default db;