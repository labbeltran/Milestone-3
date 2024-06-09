// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0y0WQb-XmYgmXy6nhG5vQ8A-6NQ20muU",
  authDomain: "milestone-3-32982.firebaseapp.com",
  projectId: "milestone-3-32982",
  storageBucket: "milestone-3-32982.appspot.com",
  messagingSenderId: "756166268339",
  appId: "1:756166268339:web:f2899b3c19c805ec35e7c6",
  measurementId: "G-3Q08GT879B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app)