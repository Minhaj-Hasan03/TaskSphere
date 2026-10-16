import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDc9IvgMpYnlvE8oopjqE2yLKLkCrZQCtg",
  authDomain: "project-6bcf8.firebaseapp.com",
  projectId: "project-6bcf8",
  storageBucket: "project-6bcf8.firebasestorage.app",
  messagingSenderId: "809034995712",
  appId: "1:809034995712:web:a189d48213f8e3519ea0e5",
  measurementId: "G-2XMTLN5ZZV"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();