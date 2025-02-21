
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
    apiKey: "AIzaSyALHzWX2DWVqdPKQIYKbHe-Oo0x5fxZU04",
    authDomain: "systemx-9f806.firebaseapp.com",
    projectId: "systemx-9f806",
    storageBucket: "systemx-9f806.firebasestorage.app",
    messagingSenderId: "706168114786",
    appId: "1:706168114786:web:b3041bc49c08114dc78b3b"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); 

export { auth, db }; 
