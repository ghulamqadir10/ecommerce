console.log("salam");

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword, 
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

import {
    // db,
    addDoc,
    getDocs,
    getFirestore,
    collection,
    setDoc,
    doc,

} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js"
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBPuzRwoh2JH-FnyemBV0bwCyLvIlA2KpE",
    authDomain: "identification-2f799.firebaseapp.com",
    projectId: "identification-2f799",
    storageBucket: "identification-2f799.appspot.com",
    messagingSenderId: "887120792467",
    appId: "1:887120792467:web:3e5aef6de28e08868c7666",
    measurementId: "G-J99F700VFF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//   initialize firebase authentication and get a reference to the service;
const auth = getAuth(app);
// initialize firestore
const db = getFirestore(app);




export {
    app,
    analytics,
    auth,
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    db,
    addDoc,
    getFirestore,
    getDocs,
    collection,
    setDoc,
    doc,
}