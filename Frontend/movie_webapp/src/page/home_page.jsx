import React, { useState } from 'react';
import SearchBar from './search_bar/seach_bar.jsx';
import MovieSearch from './search_bar/movie_search.jsx';
export const MyComponentSearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
    // Handle search logic here using the search term
    // e.g., make API requests, filter data, etc.
  };

  return (
    <div>
      {/* <SearchBar onSearch={handleSearch} /> */}
      {/* Render the rest of your component */}
      <MovieSearch></MovieSearch>
    </div>
  );
};

//export default MyComponentSearchBar;
