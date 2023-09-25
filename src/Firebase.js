// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_Yn6JPpFm7tlWDLc4E_nL0XlXuP6X7ak",
  authDomain: "chatappweb-e2395.firebaseapp.com",
  projectId: "chatappweb-e2395",
  storageBucket: "chatappweb-e2395.appspot.com",
  messagingSenderId: "800684337349",
  appId: "1:800684337349:web:5d4ae11c672bc562ede8ac",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
