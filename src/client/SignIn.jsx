import FullPageLoader from './components/FullPageLoader.tsx';
import {useState} from 'react';
import {auth} from '../firebase/config.ts';
import { 
  createUserWithEmailAndPassword, 
  sendPasswordResetEmail, 
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth";
import {useDispatch} from 'react-redux';
import {setUser} from './store/usersSlice.ts';

export function LoginPage() {
  const dispatch = useDispatch();
  const [loginType, setLoginType] = useState('login');
  const [userCredentials, setUserCredentials] = useState({});
  const [error, setError] = useState('');

  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(setUser({id: user.uid, email: user.email }));
    } else {
      dispatch(setUser(null));
    }
  });

  function handleCredentials(e) {
    setUserCredentials({...userCredentials, [e.target.name]: e.target.value});
  }

  function handleSignup(e) {
    e.preventDefault();
    setError("");
    createUserWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
  .catch((error) => {
    setError(error.message);
  });
  }

  function handleLogin(e) {
    e.preventDefault();
    setError("");
    
  signInWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
    .catch((error) => {
    setError(error.message);
  });
  }

  function handlePasswordReset() {
    const email = prompt('Please enter your email');
    sendPasswordResetEmail(auth, email);
    alert('Email sent!');
  }

    return (
      <>
        {/* { isLoading && <FullPageLoader></FullPageLoader> } */}
        
        <div className="">
          <section>
            <h1>Welcome to the LAMM Pokemon Card Store</h1>
            <p>Login or create an account to continue</p>
            <div className="">
              <button 
                className={`btn ${loginType == 'login' ? 'selected' : ''}`}
                onClick={()=>setLoginType('login')}>
                  Login
              </button>
              <button 
                className={`btn ${loginType == 'signup' ? 'selected' : ''}`}
                onClick={()=>setLoginType('signup')}>
                  Signup
              </button>
            </div>
            <form className="add-form login">
                  <div className="">
                      <label>Email *</label>
                      <input onChange={(e)=>{handleCredentials(e)}} type="text" name="email" placeholder="Enter your email" />
                  </div>
                  <div className="">
                      <label>Password *</label>
                      <input onChange={(e)=>{handleCredentials(e)}} type="password" name="password" placeholder="Enter your password" />
                  </div>
                  {
                    loginType == 'login' ?
                    <button onClick={(e)=>{handleLogin(e)}}className="">Login</button>
                    : 
                    <button onClick={(e)=>{handleSignup(e)}} className="">Sign Up</button>
                  }
                
                  {
                    error &&
                    <div>
                        {error}
                    </div>
                  }

                  <p onClick={handlePasswordReset} className="">Forgot Password?</p>
                  
              </form>
          </section>
        </div>
      </>
    )
  }
  
  