import React, { useState } from 'react';

function SearchBar({ onSearch })
{
  const [ searchTerm, setSearchTerm ] = useState('');

  const handleSearch = (e) =>
  {
    e.preventDefault();
    if (searchTerm)
    {
      onSearch(searchTerm); // Call the onSearch prop with the search term
    }
  };

  return (
    <div className="SearchBar">
      <input
        placeholder="Enter a song, album, or artist"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="SearchButton" onClick={handleSearch}>SEARCH</button>
    </div>
  );
}

export default SearchBar;