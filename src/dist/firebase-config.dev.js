"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.provider = exports.auth = exports.db = void 0;

var _app = require("firebase/app");

var _auth = require("firebase/auth");

var _firestore = require("@firebase/firestore");

// Import the functions you need from the SDKs you need
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBBwuyHz_oyoyHimuMZnOV0cKSEM90899c",
  authDomain: "saichat-d0594.firebaseapp.com",
  projectId: "saichat-d0594",
  storageBucket: "saichat-d0594.appspot.com",
  messagingSenderId: "71205781481",
  appId: "1:71205781481:web:11d5f1b94a7d3daf965578",
  measurementId: "G-QGV7JSJPZ7"
}; // Initialize Firebase

var app = (0, _app.initializeApp)(firebaseConfig);
var db = (0, _firestore.getFirestore)(app);
exports.db = db;
var auth = (0, _auth.getAuth)(app);
exports.auth = auth;
var provider = new _auth.GoogleAuthProvider(); // const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

exports.provider = provider;
//# sourceMappingURL=firebase-config.dev.js.map
