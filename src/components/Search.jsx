import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div class="searchbar">
      <input
        type="text"
        placeholder="Search by theme"
        value={query}
        onChange={(e) => setQuery(e.target.value)} 
      />
      <button onClick={handleSearch} >Search</button>
    </div>
  );
};
export default Search;
