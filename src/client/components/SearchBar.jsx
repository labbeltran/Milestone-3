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