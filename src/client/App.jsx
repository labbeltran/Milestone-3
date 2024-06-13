import {Routes, Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import{Home} from './pages/Home.tsx';
import{CardsGallery} from './pages/CardsGallery.tsx';
import{Cards} from './pages/Cards.tsx';
import{ShoppingCart} from './pages/ShoppingCart.tsx';
import {NavBar} from './components/Navbar.tsx';
import {LoginPage} from './SignIn.jsx';
import {SearchResultsPage} from './pages/SearchResultsPage.tsx';
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
      <Route path="/cards" element={<Cards/>}></Route>
      <Route path="/cart" element={<ShoppingCart/>}></Route>
      <Route path="/SignIn" element={<LoginPage/>}></Route> 
      <Route path="/search/:searchTerm" element={<SearchResultsPage/>}></Route>
    </Routes>

   </Container>
   </>
  )
}

