import React, { useState } from 'react';
// import SearchBar from './search_bar/seach_bar.jsx';
import MovieSearch from './search_bar/movie_search.jsx';
import NavBar from '../components/NavBar/NavBar.jsx';
import { SearchBar } from '../components/SearchBar/Searchbar.jsx';
import FilmList from '../components/FilmList/FilmList.jsx';
// import { useContext } from 'react';
import {Outlet} from 'react-router-dom'
import Header from '../components/Header/header.jsx';
export const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
    // Handle search logic here using the search term
    // e.g., make API requests, filter data, etc.
  };
  //let user = useContext(null);
  return (
    // let token = localStorage.getItem("access");
    

    <div>
      
      {/* <SearchBar onSearch={handleSearch} /> */}
      <NavBar></NavBar>
      <Header></Header>
      {/* <SearchBar></SearchBar> */}
      {/* Render the rest of your component */}
      <FilmList></FilmList>
      {/* <MovieSearch></MovieSearch> */}
      <Outlet />
    </div>
  );
};

//export default MyComponentSearchBar;
