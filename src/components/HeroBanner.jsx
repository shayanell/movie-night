import React from 'react'

function HeroBanner({ movies = [] }) {
  const getPosters = () => {
    if (movies.length === 0) return [null, null, null];
    if (movies.length === 1) return [movies[0], movies[0], movies[0]];
    if (movies.length === 2) return [movies[0], movies[1], movies[0]];
    return movies.slice(0, 3);
  };

  const [left, center, right] = getPosters();

  const getPosterUrl = (movie) => {
    return movie?.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : '/no-movie.png';
  };

  return (
    <div className='banner-posters'>
      {left && <img src={getPosterUrl(left)} alt={left.title} className='poster left-poster' />}
      {center && <img src={getPosterUrl(center)} alt={center.title} className='poster center-poster' />}
      {right && <img src={getPosterUrl(right)} alt={right.title} className='poster right-poster' />}
    </div>
  )
}

export default HeroBanner