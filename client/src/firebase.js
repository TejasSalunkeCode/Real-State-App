// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-a8ef5.firebaseapp.com",
  projectId: "mern-estate-a8ef5",
  storageBucket: "mern-estate-a8ef5.firebasestorage.app",
  messagingSenderId: "670618656293",
  appId: "1:670618656293:web:b5824a5e3a6efc593e29cc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);