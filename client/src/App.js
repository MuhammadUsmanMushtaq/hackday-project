import React, { useState, useEffect } from 'react';
import Movie from './components/movie/Movie';
import Header from './components/hedaer/Header';
import Search from './components/search/Search'

import './App.css';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('Avengers');
  const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
      fetch(`/movies/:${searchQuery}`)
        .then(res => res.json())
        .then(data => {
          setMovies(data.Search);
          setLoading(false);
        });
          
    }, [searchQuery]);

    const search = searchValue => {
      setLoading(true);
      setErrorMessage(null);
      setSearchQuery(searchValue);
    };

  return (
    <>
      <Header />
      <Search search={search} />

      <div className='movie-container'>
        {loading && !errorMessage ? (
         <span>loading...</span>
         ) : errorMessage ? (
          <div className='errorMessage'>{errorMessage}</div>
        ) : (
          movies.map((movie, i) => (
            <Movie key={i} {...movie} />
          ))
        )}
      </div>
    </>
  );
};

export default App;
