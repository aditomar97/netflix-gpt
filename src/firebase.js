// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArA8OPPDGoPx2oF8FWWYuDEeU1gqosvUo",
  authDomain: "netflixgpt-b2158.firebaseapp.com",
  projectId: "netflixgpt-b2158",
  storageBucket: "netflixgpt-b2158.appspot.com",
  messagingSenderId: "619634214265",
  appId: "1:619634214265:web:b74a61536332f01a071ba8",
  measurementId: "G-G2V59B81JG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);