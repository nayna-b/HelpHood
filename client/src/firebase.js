// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// ✅ Your actual Firebase config
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  apiKey: "AIzaSyBjNCcr0wE3fmnmv3iZH5Rae2O2BNSw9vU",
  authDomain: "helphood-5b101.firebaseapp.com",
  projectId: "helphood-5b101",
  storageBucket: "helphood-5b101.appspot.com", // 🔁 typo fixed here: was firebasestorage.app
  messagingSenderId: "372683426549",
  appId: "1:372683426549:web:e4d994b2fdfd58837d93bc"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Set up Google Authentication
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// ✅ Export them for use in App.js
export { auth, provider };
