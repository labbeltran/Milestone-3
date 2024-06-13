import { doSignOut } from '../../firebase/auth';
import { auth } from '../../firebase/config';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/usersSlice';
import React from 'react';

export function Home() {
  const dispatch = useDispatch();

  function handleSignOut() {
    if (window.confirm('Are you sure you want to log out?')) {
      doSignOut().then(() => {
        dispatch(setUser(null));
      }).catch((error: any) => {
        console.log(error);
      });
    }
  }

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page!</p>
      <button onClick={handleSignOut}>
        Logout
      </button>
    </div>
  );
}