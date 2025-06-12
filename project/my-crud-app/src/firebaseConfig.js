import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCeRpGONMM0fMF-XkNDWn7QkUWNsMX9QzM",
  authDomain: "react-crud-app-95ac3.firebaseapp.com",
  projectId: "react-crud-app-95ac3",
  storageBucket: "react-crud-app-95ac3.appspot.com", 
  messagingSenderId: "600957752417",
  appId: "1:600957752417:web:b346924ccb87350a5f4620"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); 