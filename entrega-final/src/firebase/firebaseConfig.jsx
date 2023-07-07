// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjtPkcgftKiDscB6he64BXBTL7k9YJGLY",
  authDomain: "fb-react-entrega-final.firebaseapp.com",
  projectId: "fb-react-entrega-final",
  storageBucket: "fb-react-entrega-final.appspot.com",
  messagingSenderId: "701487680597",
  appId: "1:701487680597:web:74abf2d74d71e4192d98dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);