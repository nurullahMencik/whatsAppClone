// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDP3gsMwrwGFpGUBj2GDFnfgtSUuvi66JY",
  authDomain: "whatsapp-ccfc7.firebaseapp.com",
  projectId: "whatsapp-ccfc7",
  storageBucket: "whatsapp-ccfc7.appspot.com",   // ✅ düzeltilmiş
  messagingSenderId: "644320626026",
  appId: "1:644320626026:web:e44dec97b36e470fd19113",
  measurementId: "G-79E5DL46FP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();


