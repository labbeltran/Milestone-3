
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Product from './components/Product';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cards">Cards</Link>
            </li>
            <li>
              <Link to="/signinlogin">Sign in/ Log in</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/signinlogin" element={<Product />} />
          <Route path="/cart" element={<Product />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;