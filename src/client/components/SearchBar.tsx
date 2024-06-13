import React from "react";
import {useState} from "react";
import {useNavigate} from 'react-router-dom';


type SearchTermProps = {
 
    id: number
    name: string
    set: {
      id: string, 
      name: string
    }
  }
export function SearchBar(props: { handleSearch: (arg0: React.FormEvent<HTMLFormElement>, arg1: string) => void }){
        let [searchTerm, setSearchTerm] = useState('')
        const navigate = useNavigate();
    
        const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
            e.preventDefault();
            navigate(`/search/${searchTerm}`);
        }
    
        return (
                <form onSubmit={(e) => props.handleSearch(e, searchTerm)}>
                    <input 
                    type="text" 
                    placeholder="Who's that Pokemon?" 
                    onChange={(e) => setSearchTerm(e.target.value)} 
                    />
                    <input 
                    type="submit" 
                    value="Search"
                    />
                </form>
        )
    }

// // import { useState } from 'react'

// // function SearchBar(props: { handleSearch: (arg0: FormEvent<HTMLFormElement>, arg1: string) => void }){
// //     let [searchTerm, setSearchTerm] = useState('')

// //     const handleSubmit = (e)=>{
// //         e.preventDefault();
// //         props.handleSearch(e, searchTerm)
// //     }

// //     return (
// //             <form onSubmit={(e) => props.handleSearch(e, searchTerm)}>
// //                 <input type="text" placeholder="Search Here" onChange={(e) => setSearchTerm(e.target.value)} />
// //                 <input type="submit" />
// //             </form>
// //     )
// // }

// // export default SearchBar


// import { useState } from 'react';

// function SearchBar(props) {
//     const [searchTerm, setSearchTerm] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault(); // Prevent default form submission behavior
//         props.handleSearch(e, searchTerm);
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <label htmlFor="search-input">Search Here</label>
//             <input
//                 id="search-input"
//                 type="text"
//                 placeholder="Search Here"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <input type="submit" value="Search" />
//         </form>
//     );
// }

// export default SearchBar;