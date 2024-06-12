import {Container, Navbar as NavbarBs} from 'react-bootstrap';


export function Navbar()  {
  return(
    <NavbarBs className= "bg-grey shadow-lg mb-3">
      <Container>Navbar</Container>
    </NavbarBs>
  )
}







// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Home from './Home';
// import CardsGallery from './components/CardsGallery';
// import SignIn from './components/SignIn';
// import Cart from './components/Cart';

// function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/cards">Cards</Link>
//             </li>
//             <li>
//               <Link to="/signinlogin">Sign in/ Log in</Link>
//             </li>
//             <li>
//               <Link to="/cart">Cart</Link>
//             </li>
//           </ul>
//         </nav>

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/product" element={<CardsGallery />} />
//           <Route path="/signinlogin" element={<SignIn />} />
//           <Route path="/cart" element={<Cart />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;