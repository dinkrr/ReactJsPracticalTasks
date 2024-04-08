import React from 'react';
import './movie-tile.css';

const MovieTile = ({ movie, onClick }) => {
  const { imageUrl, name, releaseYear, genres } = movie;

  return (
    <div className="movie-tile" onClick={onClick}>
      <div className="movie-image">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="movie-details">
        <div className="movie-name">{name}</div>
        <div className="movie-genres">
          <p>{genres.join(', ')}</p></div>
        <div className="year-box">{releaseYear}</div>
      </div>
    </div>
  );
};

export default MovieTile;
