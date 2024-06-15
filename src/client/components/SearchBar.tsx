import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../context/SearchContext';
import './SearchBar.css';

type SearchBarProps = {
  handleSearch: (event: React.FormEvent<HTMLFormElement>, searchTerm: string) => void;
};

export function SearchBar({ handleSearch }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const { setSearchResults } = useSearch();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(`api/cards/name/${searchTerm}`);
      if (!response.ok) {
        throw new Error('PokeDex Data Not Found');
      }
      const json = await response.json();
      console.log(json);
      
      // Store search results in context
      setSearchResults(json);
      
      // Navigate to search results page
      navigate(`/search-results/${searchTerm}`);
      
      // Call parent component's handleSearch function if needed
      handleSearch(e, searchTerm);
    } catch (error) {
      console.error('PokeDex Data Unavailable:', error);
      // Handle error state or feedback to the user
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="search-input-wrapper">
        <input 
          type="text" 
          placeholder="Who's that Pokemon?"
          className="search-input" 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
        <input 
          type="submit" 
          value="Search"
          className="search-button"
        />
      </div>
    </form>
  );
}