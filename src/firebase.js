// FIREBASE IMPORTS
import { initializeApp } from "firebase/app";

import { 
  getAuth,
  GoogleAuthProvider
} from "firebase/auth";

import { getFirestore } from "firebase/firestore";

// FIREBASE CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyAtdYnwKSkQvnF_0uR_Q83OoJ98ELzfRnE",
  authDomain: "local-event-finder-97798.firebaseapp.com",
  projectId: "local-event-finder-97798",
  storageBucket: "local-event-finder-97798.firebasestorage.app",
  messagingSenderId: "793237118887",
  appId: "1:793237118887:web:0e472e0f1fccce5db3e082",
  measurementId: "G-3M7DVX517X"
};

// INITIALIZE FIREBASE
const app = initializeApp(firebaseConfig);

// AUTH
export const auth = getAuth(app);

// GOOGLE PROVIDER
export const provider = new GoogleAuthProvider();

// FIRESTORE DATABASE
export const db = getFirestore(app);

// EXPORT APP
export default app;