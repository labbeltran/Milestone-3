import {Routes, Route} from 'react-router-dom';
import {Container} from 'react-boostrap';
import{Home} from './pages/Home';
import{CardsGallery} from './pages/CardsGallery';
import{Cards} from './pages/Cards';
import{Cart} from './components/Cart';
import {Navbar} from './components/Navbar';
// import { selectUsers } from './store/usersSlice'
//import {useSelector} from 'react-redux'

function App() {


  return (
   <>
   <Navbar/>
   <Container>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/cardsgallery" element={<CardsGallery/>}></Route>
      <Route path="/cards" element={<Cards/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
    </Routes>

   </Container>
   </>
  )
}

// export default App







// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Home from './pages/Home';
//import Product from './components/Product';
// import SignIn from './SignIn';
// import './App.css';

// function App() {
//   return (
    
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
//               <Link to="/signinlogin">Sign in/Log in</Link>
//             </li>
//             <li>
//               <Link to="/cart">Cart</Link>
//             </li>
//           </ul>
//         </nav>

//         <Routes>
//           <Route path="/" element={<Home />} />
//           {/* <Route path="/cards" element={<Product />} /> */}
//           <Route path="/signinlogin" element={<SignIn />} />
//           {/* <Route path="/cart" element={<Product />} /> */}
//         </Routes>
//       </div>
    
//   ); 
 
  
// }

// export default App;










// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// // import { selectUsers } from './store/usersSlice'
// //import {useSelector} from 'react-redux'

// function App() {
//   const [count, setCount] = useState(0)
//   // const user = useSelector(selectUsers)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   //return (
//   //<>
//   //{
//   //user.currentUser ? 
//   //    <BrowserRouter>
//   //    <Routes>
//   //      <Route index element={<LoginPage />} />
//   //      <Route path="add-book" element={<AddBookPage />} />
//   //      <Route path="book/:id" element={<SingleBookPage />} />
//   //    </Routes>
//   //  </BrowserRouter>
//   //<LoginPage />
//   //} 
//   //this is how the dude has it for the firebase tutorial
//   )
// }

// export default App

