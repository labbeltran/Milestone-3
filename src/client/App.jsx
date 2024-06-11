import {Routes, Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import { useEffect, useState } from 'react'
import CardsGallery from './components/CardsGallery';
// import Cards from './components/Cards';
import SearchBar from './components/SearchBar'
import {Navbar} from 


function App() {
  let [searchTerm, setSearchTerm] = useState('')
  let [data, setData] = useState([])
  let [message, setMessage] = useState('Whos that Pokemon!')

  useEffect(() => {
    if (searchTerm) {
      document.title=`${searchTerm}, I choose you!`
      const fetchData = async () => {
        const response = await fetch(`https://api.pokemontcg.io/v2/cards?search?term=${searchTerm}`);
        const resData = await response.json()
        if(resData.results.length > 0) {
          setData(resData.results)
        } else {
          setMessage('Not Found');
          setData([]);
        }
      }
      fetchData()
  }
  }, [searchTerm])

  const handleSearch = (e, term) => {
    e.preventDefault();
    setSearchTerm(term);
  };

  return (<Container className="mb-4">
    <>
    <div className="search-bar">
      <SearchBar handleSearch={handleSearch} />
      {message}
      <CardsGallery data={data} />
    </div>
    </>
  </Container>
   
  );
}

export default App;