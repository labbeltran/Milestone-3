import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import './SearchBar.css';


type SearchBarProps = {
  handleSearch: (event: React.FormEvent<HTMLFormElement>, searchTerm: string) => void;
};

export function SearchBar({ handleSearch }: SearchBarProps) {
        let [searchTerm, setSearchTerm] = useState('')
        const navigate = useNavigate();

        const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
    
          try {
            const response = await fetch(`api/cards/name/${encodeURIComponent(searchTerm)}`);
            if (!response.ok) {
              throw new Error('Failed to fetch card data');
            }
            const json = await response.json();
            console.log(json)
            
            // Navigate to search results page
            navigate(`/search-results/${encodeURIComponent(searchTerm)}`);
            // Call parent component's handleSearch function if needed
            handleSearch(e, searchTerm);
          } catch (error) {
            console.error('Error fetching card data:', error);
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
        )
      }