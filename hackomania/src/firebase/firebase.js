// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2sgbXUyE27onS3vAJTZvKp2gMUXzGNMA",
  authDomain: "hackomania-8dfe0.firebaseapp.com",
  projectId: "hackomania-8dfe0",
  storageBucket: "hackomania-8dfe0.firebasestorage.app",
  messagingSenderId: "328148064713",
  appId: "1:328148064713:web:5e8f3fd92f2826c3b63018"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()