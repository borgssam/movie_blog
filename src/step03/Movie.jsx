import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';


 function Movie({id, title, year, summary, poster, genres}){
  return (
    <div className='movie'>
      <img src={poster} alt={title} title={title}/>
      
      <div className='movie_data'>  
        <h3 className='movie_title' >{title}</h3>
        {/* <h3 className='movie_title' style={{ backgroundColor:'red'}}>{title}</h3> */}
        <h3 className='movie_year'>{year}</h3>
        <h3 className='movie_summary'>{summary.slice(0,180)}...</h3>
        <ul className='movie_genres'>
          {
            genres.map((  genre ,idx )=>{return (
              <li key={idx} className='movie_genre'>{genre}</li>
            );})
          }
        </ul>

      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;