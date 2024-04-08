// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASpb0hrw1iT71clAlVzMUPxcb8DbPQIhQ",
  authDomain: "proyecto-final-220ab.firebaseapp.com",
  projectId: "proyecto-final-220ab",
  storageBucket: "proyecto-final-220ab.appspot.com",
  messagingSenderId: "62597307594",
  appId: "1:62597307594:web:7384336e75d1e037732833",
  measurementId: "G-MJFVJQLX0F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);