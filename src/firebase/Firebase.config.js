// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIj4tKbyi_TXZlF323QaVx4PmM_Z8w1Io",
  authDomain: "skills-swap-7d355.firebaseapp.com",
  projectId: "skills-swap-7d355",
  storageBucket: "skills-swap-7d355.firebasestorage.app",
  messagingSenderId: "623694143811",
  appId: "1:623694143811:web:f4c1b826d74da039ff4ff6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export default app;