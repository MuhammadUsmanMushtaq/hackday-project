import React from 'react';
import './movie.css'


const Movie = ({ Title, Year, Poster}) => {
  return ( 
    
  <div className='first hero'>
    <img className='hero-profile-img' src={Poster} alt='' />
    <div  className='hero-date'>
      <h4>{Title}</h4>
      <p>{Year}</p>
    </div>
  </div>
  
  )
};

export default Movie;