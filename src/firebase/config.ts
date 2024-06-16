import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "milestone-3-49e1b.firebaseapp.com",
  projectId: "milestone-3-49e1b",
  storageBucket: "milestone-3-49e1b.appspot.com",
  messagingSenderId: "397752647742",
  appId: "1:397752647742:web:1e2aa08c161f21aa45116f"
};

// Check if a Firebase app is already initialized
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

export const auth = getAuth(app);
export type { User } from 'firebase/auth';
export const firestore = getFirestore(app);