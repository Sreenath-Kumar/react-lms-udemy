import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4rbdtiCPN2TODMauKYhlVpMvB6uTjMv8",
  authDomain: "udemy-clone-9dfa6.firebaseapp.com",
  databaseURL:
    "https://udemy-clone-9dfa6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "udemy-clone-9dfa6",
  storageBucket: "udemy-clone-9dfa6.appspot.com",
  messagingSenderId: "728654922704",
  appId: "1:728654922704:web:9f16f203b6ca80d701afd5",
  measurementId: "G-GLT6MJ4WQD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
