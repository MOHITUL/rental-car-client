// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnTBIpspEfFj4xONvIcEcerKjzQ4qUkz4",
  authDomain: "car-rental-38fb9.firebaseapp.com",
  projectId: "car-rental-38fb9",
  storageBucket: "car-rental-38fb9.firebasestorage.app",
  messagingSenderId: "735909089979",
  appId: "1:735909089979:web:ab3e207f7e49788241cf9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;