import React, { createContext, useContext, useState, ReactNode, FC } from 'react';

type SearchContextType = {
  searchResults: any[];
  setSearchResults: React.Dispatch<React.SetStateAction<any[]>>;
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const useSearch = (): SearchContextType => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

export const SearchProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [searchResults, setSearchResults] = useState<any[]>([]);

  return (
    <SearchContext.Provider value={{ searchResults, setSearchResults }}>
      {children}
    </SearchContext.Provider>
  );
};