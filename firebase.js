// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import { getDatabase, ref, push } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJRneQ5NxHV6B2DaMbbYKAueg5tFNlanc",
  authDomain: "feedback-form-3e84b.firebaseapp.com",
  projectId: "feedback-form-3e84b",
  storageBucket: "feedback-form-3e84b.appspot.com",
  messagingSenderId: "916382518081",
  appId: "1:916382518081:web:e54f75713406bbc8026fc0",
  measurementId: "G-8LEGVB3ENF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
const db = getDatabase(app);

export { db, ref, push, firestore };
