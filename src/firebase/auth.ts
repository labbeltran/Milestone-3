import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  updatePassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

export const doCreateUserWithEmailAndPassword = async (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithEmailAndPassword = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  const user = result.user;
};

export const doSignOut = () => {
  return auth.signOut();
};

export const doPasswordReset = (email: string) => {
  return sendPasswordResetEmail(auth, email);
};

export const doPasswordChange = async (password: string) => {
  if (auth.currentUser) {
    return updatePassword(auth.currentUser, password);
  } else {
    throw new Error("No user is currently signed in.");
  }
};

export const doSendEmailVerification = async () => {
  if (auth.currentUser) {
    return sendEmailVerification(auth.currentUser, {
      url: `${window.location.origin}/home`,
    });
  } else {
    throw new Error("No user is currently signed in.");
  }
};
