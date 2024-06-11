import { useEffect, useState } from 'react'
import CardsGallery from './components/CardsGallery';
// import Cards from './components/Cards';
import SearchBar from './components/SearchBar'

function App() {
  let [searchTerm, setSearchTerm] = useState('')
  let [data, setData] = useState([])
  let [message, setMessage] = useState('Whos that Pokemon!')

  useEffect(() => {
    if (searchTerm) {
      document.title=`${searchTerm} Pokemon`
      const fetchData = async () => {
        const response = await fetch(`https://api.pokemontcg.io/v2/cardssearch?term=${searchTerm}`)
        const resData = await response.json()
        if(resData.results.length > 0) {
          setData(resData.results)
        } else {
          setMessage('Not Found')
        }
      }
      fetchData()
  }
  }, [searchTerm])

  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearchTerm(term)
  }

  return (
    <div className="App">
      <SearchBar handleSearch={handleSearch} />
      {message}
      <CardsGallery data={data} />
    </div>
  );
}

export default App;