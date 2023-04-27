import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    onSearch(searchTerm); // Call the onSearch callback with the search term
  };

  return (
    <div className="relative">
      <input
        type="text"
        className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
        placeholder="Search..."
        onChange={handleSearch}
      />
      <svg
        className="absolute right-3 top-3 h-5 w-5 text-gray-400"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M11.29 13.704a7.499 7.499 0 01-1.414-7.98l-.246-.246a7.999 7.999 0 111.414 7.98l.246.246zM9.5 15a5.5 5.5 0 100-11 5.5 5.5 0 000 11z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default SearchBar;
