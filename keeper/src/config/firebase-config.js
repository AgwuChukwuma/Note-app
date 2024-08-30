// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgIex_IFyOOAplR09LKQdvVd8KCRisxFo",
  authDomain: "note-app-27a4b.firebaseapp.com",
  projectId: "note-app-27a4b",
  storageBucket: "note-app-27a4b.appspot.com",
  messagingSenderId: "370675546399",
  appId: "1:370675546399:web:a5cec3714f7a86175dd82a",
  measurementId: "G-D5D1D1SMSB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);