// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCNv6RVU89knCJ7EoNMEEvWXUUW-5gKDZU",
    authDomain: "atitusgamers.firebaseapp.com",
    projectId: "atitusgamers",
    storageBucket: "atitusgamers.appspot.com",
    messagingSenderId: "632176381820",
    appId: "1:632176381820:web:e0b52d0c62afd0c950def9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);