// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDurwlhRyx3kM12od2w2UCLxc17xH3p6jU",
  authDomain: "journalapp-8aba9.firebaseapp.com",
  projectId: "journalapp-8aba9",
  storageBucket: "journalapp-8aba9.appspot.com",
  messagingSenderId: "611272397959",
  appId: "1:611272397959:web:88a72c55bf4bf105bf1422"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp )
export const FirebaseDB = getFirestore( FirebaseApp )