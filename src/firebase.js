// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJ-jXQIAW_bwQViUh5BW68cFkpNOZp-mw",
  authDomain: "gofit-e717b.firebaseapp.com",
  projectId: "gofit-e717b",
  storageBucket: "gofit-e717b.firebasestorage.app",
  messagingSenderId: "103704867710",
  appId: "1:103704867710:web:5efbfa852d82f480e3792f",
  measurementId: "G-TT7EQSQMZG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export { auth };
export default app;

