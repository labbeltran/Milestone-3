import './Home.css';
import reactLogo from '../assets/react.svg';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-header">Home Page</h1>
      <p className="home-paragraph">Welcome to the Home Page!</p>
      <img src={reactLogo} className="home-logo" alt="React logo" />
    </div>
  );
};

export default Home;