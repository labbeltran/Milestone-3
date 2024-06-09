// import React, {useContext, useState, useEffect} from "react";
// import {Navigate, Link} from 'react-router-dom';
// import {auth} from "../../firebase/config";
// import {onAuthStateChanged} from "firebase/auth"
// import { doSignInWithEmailAndPassword, doSignInWithGoogle } from "../../firebase/auth";
// import {useAuth} from '../../../contexts/authContext'

// const AuthContext= React.createContext();

// export function AuthProvider({children}){
//     const[currentUser, setCurrentUser] = useState(null);
//     const [userLoggedIn, setUserLoggedIn] = useState(false);
//     const [loading, setLoading]= useState(true);

//     useEffect(()=>{
//         const unsubscribe = onAuthStateChanged(auth, initializeUser);
//         return unsubscribe;
//     }, [])

//     async function initializeUser(user){
//         if(user) {
//             setCurrentUser({...user});
//             setUserLoggedIn(true);
//         } else {
//             setCurrentUser(null);
//             setUserLoggedIn(false);
//         }
//         setLoading(false);
//     }

//     const value ={
//         currentUser,
//         userLoggedIn,
//         loading,
//     }

//     return(
//         <AuthContext.Provider value= {value}>
//             {!loading && children}
//         </AuthContext.Provider>
//     )
// }