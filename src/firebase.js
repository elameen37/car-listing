// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADfY07249x2L5Aq5vRLdspxWdn1wCR1qQ",
  authDomain: "superkarz.firebaseapp.com",
  projectId: "superkarz",
  storageBucket: "superkarz.appspot.com",
  messagingSenderId: "47600843127",
  appId: "1:47600843127:web:9deb81b2ce0cfb52230972"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()