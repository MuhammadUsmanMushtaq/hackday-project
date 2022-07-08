import React, { useState } from 'react';
import './search.css';

const Search = ({search}) => {
  const [searchValue, setSearchValue] = useState('');
  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }
  const resetInputField = () => {
      setSearchValue('')
    }
  const callSearchFunction = (e) => {
      e.preventDefault();
      search(searchValue);
      resetInputField();
    }
return (
      <form className='search'>
        <input
          className='search-input'
          value={searchValue}
          onChange={handleSearchInputChanges}
          type='text'
          placeholder='Search your favourite movie' 
        />
        <input 
          onClick={callSearchFunction} 
          className='submit-input' 
          type='submit' 
          value='SEARCH' 
        />
      </form>
    );
}
export default Search;