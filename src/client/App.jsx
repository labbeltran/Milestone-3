import {Routes, Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import{Home} from './pages/Home.jsx';
// import{CardsGallery} from './pages/CardsGallery.jsx';
// import{Cards} from './pages/Cards.jsx';
import{Cart} from './pages/Cart.jsx';
import {NavBar} from './components/Navbar.jsx';
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
      <Route path="/cart" element={<Cart/>}></Route>
    </Routes>

   </Container>
   </>
  )
}



