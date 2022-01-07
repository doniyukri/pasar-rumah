import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbdVnB52p2K50QkKKJf5LDWkhDcq6Q2B8",
  authDomain: "pasar-rumah.firebaseapp.com",
  projectId: "pasar-rumah",
  storageBucket: "pasar-rumah.appspot.com",
  messagingSenderId: "810667529845",
  appId: "1:810667529845:web:ae0cfb5ff60ea71ff04a3c",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const dv = getFirestore();
