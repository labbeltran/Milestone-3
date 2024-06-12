import {signOut } from "firebase/auth"
import {auth} from '../../firebase/config.js'
import {useDispatch} from 'react-redux';
import {setUser} from '../../client/store/usersSlice.js';
import PokemonLogo from '../assets/Pokemon.svg';
import './Home.css';

export function Home () {
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
    <div className="home-container">
      <h1 className="home-header">Home Page</h1>
      <p className="home-paragraph">Welcome to the Home Page!</p>
      <img src={PokemonLogo} className="home-logo" alt="Pokemon logo" />
    
    <button className="home-button" onClick={handleSignOut}>
      Logout
    </button>
    </div>
  );
};

//export default Home;