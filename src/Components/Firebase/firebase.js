
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHwedlAz1fsa_dV9wu-HZnM_n_tXFMiDA",
  authDomain: "signup-signin-practise.firebaseapp.com",
  projectId: "signup-signin-practise",
  storageBucket: "signup-signin-practise.firebasestorage.app",
  messagingSenderId: "291991126185",
  appId: "1:291991126185:web:a4b13e407507116f8aa9b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;