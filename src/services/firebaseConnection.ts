// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDU6MvBtQwwEuqxob3MuFuzoxl9_xWTBpU",
  authDomain: "linktreereact-70279.firebaseapp.com",
  projectId: "linktreereact-70279",
  storageBucket: "linktreereact-70279.firebasestorage.app",
  messagingSenderId: "69991493158",
  appId: "1:69991493158:web:b8600e8d556ac528bcc0e7",
  measurementId: "G-PR6P0S6DDV"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export{ auth, db };