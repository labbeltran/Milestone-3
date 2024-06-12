import { useEffect, useState } from 'react'

// import Cards from './components/Cards';
import SearchBar from './components/SearchBar'

export function CardsGallery() {
  let [searchTerm, setSearchTerm] = useState('')
  let [data, setData] = useState([])
  let [message, setMessage] = useState('Whos that Pokemon!')

  useEffect(() => {
    if (searchTerm) {
      document.title=`${searchTerm}, I choose you!`
      const fetchData = async () => {
        const response = await fetch(`https://api.pokemontcg.io/v2/cards?search?term=${searchTerm}`);
        const resData = await response.json(data)
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

  return (
    <div className="search-bar">
      <SearchBar handleSearch={handleSearch} />
      {message}
      {/* <CardsGallery data={data} /> */}
    </div>
  );
}

//export default CardsGallery;


// function CardsGallery(props: { data: any[] }){

//     const display = props.data.map((item, index) => {
//         return (
//             <Cards item={item} key={index} />
//         )
//     })

//     return (
//         <div>
//             {display}
//         </div>
//     )
// }

// export default CardsGallery
