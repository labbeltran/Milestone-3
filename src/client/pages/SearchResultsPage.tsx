import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface SearchResult {
  id: number;
  name: string;
  set: {
    id: string;
    name: string;
  };
}

export function SearchResultsPage() {
  const { searchTerm } = useParams<{ searchTerm: string }>();
  const [result, setResult] = useState<SearchResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const response = await fetch(`api/cards?name=${searchTerm}`);
        const json = await response.json();

        if (response.ok) {
          setResult(json);
        } else {
          setError('PokeDex Data Unavailable');
        }
      } catch (err) {
        setError('PokeDex Data Unavailable');
      }
    };
    fetchResult();
  }, [searchTerm]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!result) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{result.name}</h1>
      <p>ID: {result.id}</p>
      <p>Set ID: {result.set.id}</p>
      <p>Set Name: {result.set.name}</p>
    </div>
  );
}


