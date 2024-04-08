import React from 'react';
import './movie-details.css';

const MovieDetails = ({ movie }) => {
  const { imageUrl, name, releaseYear, rating, duration, description } = movie;

  return (
    <div className="movie-details">
      <div className="movie-poster">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="movie-info">
        <h2 className="movie-name">{name}</h2>
        <p className="release-year">Release Year: {releaseYear}</p>
        <p className="rating">Rating: {rating}</p>
        <p className="duration">Duration: {duration}</p>
        <p className="description">Description: {description}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
