import {Routes, Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import{Home} from './pages/Home.js';
import{CardsGallery} from './pages/CardsGallery.js';
import{ShoppingCart} from './pages/ShoppingCart.js';
import {NavBar} from './components/Navbar.js';
import {LoginPage} from './SignIn.jsx';
import {SearchResultsPage} from './pages/SearchResultsPage.js';


export function App() {


  return (
   <>
   <NavBar/>
   <Container>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/cardsgallery" element={<CardsGallery/>}></Route>
      <Route path="/cart" element={<ShoppingCart isOpen={false}/>}></Route>
      <Route path="/SignIn" element={<LoginPage/>}></Route> 
      <Route path="/search-results/:searchTerm" element={<SearchResultsPage />} />
    </Routes>

   </Container>
   </>
  )
}

