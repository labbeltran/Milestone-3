import React, { useState, useEffect } from 'react';
import { Col, Row } from "react-bootstrap"
import {Cards} from './Cards'
import './CardsGallery.css';


type CardItem = {
  id: string
  name: string
  set: {
    id: string, 
    name: string
  }
  rarity: string
  flavorText: string
  images: {
    small: string 
    large: string
  }
  cardmarket: {
    prices: {
      averageSellPrice: number
    }
  }
}



export function CardsGallery() {
    const [cards, setCards] = useState<CardItem[] | null>(null);

    useEffect(()=>{
      const fetchCards = async ()=> {
        const response = await fetch('api/cards');
        const json= await response.json();

        if(response.ok){
            setCards(json)
        };
      };
      fetchCards()
    }, [])

      
    return (
      <>
        <h1>Store</h1>
        <Row md={2} xs={1} lg={3} className="g-3 fs-3">
          {cards && cards.map(item => (
            <Col key={item.id} className="fs-6">
              <div className="card-custom">
                <div className="card-content">
                  <Cards  {...item} />
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </>
    )
  }
    
    
//     return (
//     <>
//       <h1>Store</h1>
//       <Row md={2} xs={1} lg={3} className="g-3 fs-3">
//         {cards && cards.map(item => (
//           <Col key={item.name} className="fs-6">
//             <Cards  {...item} />
//           </Col>
//         ))}
//       </Row>
//     </>
//   )
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