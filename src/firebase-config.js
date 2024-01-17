// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBwuyHz_oyoyHimuMZnOV0cKSEM90899c",
  authDomain: "saichat-d0594.firebaseapp.com",
  projectId: "saichat-d0594",
  storageBucket: "saichat-d0594.appspot.com",
  messagingSenderId: "71205781481",
  appId: "1:71205781481:web:11d5f1b94a7d3daf965578",
  measurementId: "G-QGV7JSJPZ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);