// src/firebase.tsx
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCG_RT7_D54OQl-wQSvpBYGzqHGFWIdN6w",
  authDomain: "final-pt-20c8b.firebaseapp.com",
  projectId: "final-pt-20c8b",
  storageBucket: "final-pt-20c8b.appspot.com",
  messagingSenderId: "391095965474",
  appId: "1:391095965474:web:1eac61cfb8097147df377b",
  measurementId: "G-QKBRYREGT8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize Authentication
const db = getFirestore(app); // Initialize Firestore

export { auth, db }; // Export Auth and Firestore instances
