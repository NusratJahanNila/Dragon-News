// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqFiYycwYV56TWfjkhqfOyh0bXnQ_ATHU",
  authDomain: "dragon-news-94209.firebaseapp.com",
  projectId: "dragon-news-94209",
  storageBucket: "dragon-news-94209.firebasestorage.app",
  messagingSenderId: "718348972449",
  appId: "1:718348972449:web:f26a7a63076de35c605be0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);