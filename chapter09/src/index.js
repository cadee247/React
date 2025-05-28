import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//firebase dependancies
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebaseApp from './firebase';

const firebaseConfig = {
  //firebase config values

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: "AIzaSyAWRV9kH54-ewMn3kqDaIe0ZkdbeRn4iy4",
  authDomain: "reactproject-7a816.firebaseapp.com",
  projectId: "reactproject-7a816",
  storageBucket: "reactproject-7a816.appspot.com",
  messagingSenderId: "535115651200",
  appId: "1:535115651200:web:6c3e21d28839629015ae65",
  measurementId: "G-3QFLYFPK5P"
};
firebase.initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
