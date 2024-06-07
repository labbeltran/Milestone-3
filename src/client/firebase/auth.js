import {auth} from "./firebase";

import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithGoogle} from "firebase/auth"

export const doCreateUserWithEmailAndPassword = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password); 
};

export const doSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result= await signInWithPopup(auth, provider);

    return result;
};

export const doSignOut = () =>{
    return auth.signOut();
};


// password reset

// export const doPasswordReset = (email) => {
//     return sendPasswordResetEmail(auth, email);
// };

// export const doPasswordChange= (password) => {
//     return updatePassword(auth.currentUser, password);
// }

// export const doSendEmailVerification = ()=> {
//     return doSendEmailVerification(auth.currentUser, {
//         url: `${window.location.origin}/home`,
//     });
// };