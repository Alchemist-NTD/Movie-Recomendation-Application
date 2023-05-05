import React, { useState } from "react";
// import SearchBar from './search_bar/seach_bar.jsx';
import MovieSearch from "./search_bar/movie_search.jsx";
import NavBar from "../components/NavBar/NavBar.jsx";
import { SearchBar } from "../components/SearchBar/Searchbar.jsx";
import FilmList from "../components/FilmList/FilmList.jsx";
// import { useContext } from 'react';
import { Outlet } from "react-router-dom";
import RCM_FilmList from "../components/RCM_FilmList/RCM_FilmList.jsx";
export const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");

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
      <NavBar />
      {/* <SearchBar></SearchBar> */}
      {/* Render the rest of your component */}
      <FilmList></FilmList>
      <p className="flex my-16 mx-4 justify-start text-4xl font-bold font-cyan-50 uppercase ">
        Film for you 
      </p>
      <RCM_FilmList />
      {/* <MovieSearch></MovieSearch> */}
      <Outlet />
    </div>
  );
};

//export default MyComponentSearchBar;
