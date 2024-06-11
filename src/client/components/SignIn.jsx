import { useState } from 'react';
import { auth } from '../../firebase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [loginType, setLoginType] = useState('login');
  const [userCredentials, setUserCredentials] = useState({});
  const [error, setError] = useState('');

  function handleCredentials(e) {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  }

  function handleSignup(e) {
    e.preventDefault();
    setError('');

    createUserWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  return (
    <>
      {isLoading && <div>Loading...</div>}

      <div className="container login-page">
        <section>
          <h1>Welcome to the LAMM Pokemon Card Store</h1>
          <p>Login or create an account to continue</p>
          <div className="login-type">
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
                <div className="form-control">
                    <label>Email *</label>
                    <input onChange={(e)=>{handleCredentials(e)}} type="text" name="email" placeholder="Enter your email" />
                </div>
                <div className="form-control">
                    <label>Password *</label>
                    <input onChange={(e)=>{handleCredentials(e)}} type="password" name="password" placeholder="Enter your password" />
                </div>
                {
                  loginType == 'login' ?
                  <button className="active btn btn-block">Login</button>
                  : 
                  <button onClick={(e)=>{handleSignup(e)}} className="active btn btn-block">Sign Up</button>
                }
              
                {
                  error &&
                  <div>
                      {error}
                  </div>
                }

                <p className="forgot-password">Forgot Password?</p>
                
            </form>
        </section>
      </div>
    </>
  )
}

export default LoginPage



