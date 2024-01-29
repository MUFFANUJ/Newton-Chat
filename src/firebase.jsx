// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAAojW7aoRIewLqCBen49QqbF5XS0x3IRM",
  authDomain: "newchat-77499.firebaseapp.com",
  databaseURL: "https://newchat-77499-default-rtdb.firebaseio.com",
  projectId: "newchat-77499",
  storageBucket: "newchat-77499.appspot.com",
  messagingSenderId: "701573152485",
  appId: "1:701573152485:web:491c2f62fbe854ccf6de0c"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
