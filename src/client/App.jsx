import {Routes, Route} from 'react-router-dom';
import {Container} from 'react-boostrap';
import{Home} from './client/pages/Home';
import{CardsGallery} from './client/pages/CardsGallery';
import{Cards} from './client/pages/Cards';
import{Cart} from './client/pages/Cart';
import {Navbar} from './client/components/Navbar';
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

export default App

