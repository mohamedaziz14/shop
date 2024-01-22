import React from 'react';

const Search = () => {
  return (
    <div className='searchForm'>
      <input type="text" placeholder="Looking for..." className='search' />
      <button className='searchButton'>&#x1F50E;</button>
    </div>
  );
};

export default Search;
