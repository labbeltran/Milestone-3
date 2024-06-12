import {signOut } from "firebase/auth"
import {auth} from '../firebase/config.js'
import {useDispatch} from 'react-redux';
import {setUser} from '../store/usersSlice.js';

const Home = () => {
const dispatch = useDispatch();
  function handleSignOut (){
    if(confirm('are you sure you want to log out?')) {
    signOut(auth).then(() => {
      dispatch(setUser(null));
    }).catch((error) => {
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
};

export default Home;