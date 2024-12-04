// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnZECYeOQlNp-ykHmEpnhKZngO3dHSQf0",
  authDomain: "thiruproject-96f99.firebaseapp.com",
  projectId: "thiruproject-96f99",
  storageBucket: "thiruproject-96f99.firebasestorage.app",
  messagingSenderId: "96481708290",
  appId: "1:96481708290:web:31e50238ee566260329a1b",
  measurementId: "G-4YJTTCFC0K"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const stdAuth=getAuth(app)
export const db=getFirestore(app)
export default app;