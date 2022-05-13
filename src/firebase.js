// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD7AIy9JrT8cLYKjEFlUphKVjc2DP4fiKk",
    authDomain: "diet-planner-20408.firebaseapp.com",
    projectId: "diet-planner-20408",
    storageBucket: "diet-planner-20408.appspot.com",
    messagingSenderId: "367366892203",
    appId: "1:367366892203:web:58fc7ffbb0e8c2308ca5ee",
    measurementId: "G-2SGQB0J1K1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
