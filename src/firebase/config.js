import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEprCQP-HC51UgJXsN7o1x7iUBUWXxeog",
  authDomain: "milestone-3-49e1b.firebaseapp.com",
  projectId: "milestone-3-49e1b",
  storageBucket: "milestone-3-49e1b.appspot.com",
  messagingSenderId: "397752647742",
  appId: "1:397752647742:web:1e2aa08c161f21aa45116f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);