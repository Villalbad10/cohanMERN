// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAHhxAoe5h5wVzvX3K7drHBzonQQPNHnp4",
  authDomain: "cohan-a7b9f.firebaseapp.com",
  projectId: "cohan-a7b9f",
  storageBucket: "cohan-a7b9f.appspot.com",
  messagingSenderId: "681998002251",
  appId: "1:681998002251:web:481853aaba18bdfb1705ce",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const google = new GoogleAuthProvider();
