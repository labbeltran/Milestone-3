import {Routes, Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import{Home} from './pages/Home.js';
import{CardsGallery} from './pages/CardsGallery.js';
import{Cards} from './pages/Cards.js';
import{ShoppingCart} from './pages/ShoppingCart.js';
import {NavBar} from './components/Navbar.js';
import {LoginPage} from './SignIn.jsx';
import {SearchResultsPage} from './pages/SearchResultsPage.js';
import React from 'react';
// import { selectUsers } from './store/usersSlice'
//import {useSelector} from 'react-redux'

export function App() {


  return (
   <>
   <NavBar/>
   <Container>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/cardsgallery" element={<CardsGallery/>}></Route>
      <Route path="/cards" element={<Cards id={''} name={''} set={{
            id: '',
            name: ''
          }} rarity={''} flavorText={''} images={{
            small: '',
            large: ''
          }} cardmarket={{
            prices: {
              averageSellPrice: 0
            }
          }}/>}></Route>
      <Route path="/cart" element={<ShoppingCart isOpen={false}/>}></Route>
      <Route path="/SignIn" element={<LoginPage/>}></Route> 
      <Route path="/search-results/:searchTerm" element={<SearchResultsPage />} />
    </Routes>

   </Container>
   </>
  )
}

