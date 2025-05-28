// src/firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyAWRV9kH54-ewMn3kqDaIe0ZkdbeRn4iy4",
    authDomain: "reactproject-7a816.firebaseapp.com",
    projectId: "reactproject-7a816",
    storageBucket: "reactproject-7a816.appspot.com",
    messagingSenderId: "535115651200",
    appId: "1:535115651200:web:6c3e21d28839629015ae65",
    measurementId: "G-3QFLYFPK5P"
};

// Prevent duplicate initialization
const firebaseApp = firebase.apps.length ? firebase.app() : firebase.initializeApp(firebaseConfig);

export default firebaseApp;