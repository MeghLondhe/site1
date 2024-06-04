// src/firebase.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC8ZdL_yC2jYbB8pbo1ffV6EUuMBapSFxQ",
    authDomain: "regist-cd42c.firebaseapp.com",
    projectId: "regist-cd42c",
    storageBucket: "regist-cd42c.appspot.com",
    messagingSenderId: "605137806076",
    appId: "1:605137806076:web:a2b5a8025514bc8bab6d79",
    measurementId: "G-KNL8J4W1QW"
};

const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
