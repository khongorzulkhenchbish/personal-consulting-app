// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJIzbnH5aGTqfshVBqFmTnl5lWqm7mx_Y",
  authDomain: "zula-consulting-app.firebaseapp.com",
  projectId: "zula-consulting-app",
  storageBucket: "zula-consulting-app.appspot.com",
  messagingSenderId: "292609083365",
  appId: "1:292609083365:web:892e490da7540d2091510c",
  measurementId: "G-K65ZWYJK6X",
  databaseURL: "https://zula-consulting-app-default-rtdb.europe-west1.firebasedatabase.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;