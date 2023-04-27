import React, { useState } from 'react';
import axios from 'axios';

const MovieSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://www.omdbapi.com/?s=${searchTerm}&apikey=YOUR_API_KEY`);
      const { Search, Error } = response.data;

      if (Error) {
        setError(Error);
        setMovies([]);
      } else {
        setError(null);
        setMovies(Search || []);
      }
    } catch (error) {
      console.error(error);
      setError('An error occurred while fetching movies.');
      setMovies([]);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Movie Search</h1>
      <div className="flex mb-4">
        <input
          type="text"
          className="flex-grow py-2 px-4 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:ring-blue-500"
          placeholder="Enter a movie title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      {error && (
        <div className="text-red-500 mb-4">
          <p>{error}</p>
        </div>
      )}
      <ul>
        {movies.map((movie) => (
          <li key={movie.imdbID} className="mb-4">
            <h2 className="text-lg font-bold">{movie.Title}</h2>
            <p>Year: {movie.Year}</p>
            <p>Type: {movie.Type}</p>
            <p>IMDb ID: {movie.imdbID}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieSearch;
