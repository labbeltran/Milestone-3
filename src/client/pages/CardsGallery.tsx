// import {Col, Row} from 'react-bootstrap';
// import {Cards} from './Cards'

// export function CardsGallery(){
//     return(
//         <>
//             <h1>PokeStore</h1>
//             <Row md={3} xs={1} lg={4} className="g-3">
//                 {}
//                 <Col key={card.id}><Cards {...{card}}/></Col>
//             </Row>
//         </>
//     )
// }






// import { useEffect, useState } from 'react';
// import { SearchBar } from '../components/SearchBar';
// import {Cards} from './components/Cards';

// export function CardsGallery() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [data, setData] = useState([]);
//   const [message, setMessage] = useState('Who\'s that Pokemon!');

//   useEffect(() => {
//     if (searchTerm) {
//       document.title = `${searchTerm}, I choose you!`;
//       const fetchData = async () => {
//         try {
//           const response = await fetch(`https://api.pokemontcg.io/v2/cards?q=name:${searchTerm}`);
//           const resData = await response.json();
//           if (resData.data.length > 0) {
//             setData(resData.data);
//             setMessage('');
//           } else {
//             setMessage('Not Found');
//             setData([]);
//           }
//         } catch (error) {
//           setMessage('Error fetching data');
//           setData([]);
//         }
//       };
//       fetchData();
//     } else {
//       setMessage('Who\'s that Pokemon!');
//       setData([]);
//     }
//   }, [searchTerm]);

//   const handleSearch = (e, term) => {
//     e.preventDefault();
//     setSearchTerm(term);
//   };

//   return (
//     <div className="search-bar">
//       <SearchBar handleSearch={handleSearch} />
//       {message && <p>{message}</p>}
//       <div className="cards-gallery">
//         {data.map((item, index) => (
//           <Cards item={item} key={index} />
//         ))}
//       </div>
//     </div>
//   );
// }