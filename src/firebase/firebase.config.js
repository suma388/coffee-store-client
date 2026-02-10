// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzuiwn6cl0uCg-K5LyMAwbQVdbd9AeXoU",
  authDomain: "coffee-store-app-9169c.firebaseapp.com",
  projectId: "coffee-store-app-9169c",
  storageBucket: "coffee-store-app-9169c.firebasestorage.app",
  messagingSenderId: "601896464533",
  appId: "1:601896464533:web:4088e651c8577a14a6ab9c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
