import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCV8OP-2MWvvG6Exb0XsMd_KbNjRPEijdo",
  authDomain: "netflix-mern-a6e70.firebaseapp.com",
  projectId: "netflix-mern-a6e70",
  storageBucket: "netflix-mern-a6e70.appspot.com",
  messagingSenderId: "295008029940",
  appId: "1:295008029940:web:906f39f3eb8686f3f1a2a1",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

const firestore = getFirestore();

const auth = getAuth();

export { firebase, firestore, auth };
