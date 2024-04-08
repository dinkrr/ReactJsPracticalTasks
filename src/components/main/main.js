import './main.css';
import React from 'react';
import Counter from '../counter';
import SearchForm from '../search-form';
import GenreSelector from '../genre-selector';
import MovieTile from '../movie-tile/movie-tile';
import movie1Image from '../../assets/images/pulp-fiction.jpg';

const Main = () => {
  const movies = [
    {
      imageUrl: movie1Image,
      name: 'Pulp Fiction',
      releaseYear: 2004,
      genres: ['Action & Adventure']
    }
  ];

  const handleMovieClick = (movieName) => {
    console.log(`Clicked on ${movieName}`);
  };

  return (
    <main>
      <Counter />
      <SearchForm />
      <GenreSelector />
      {movies.map((movie, index) => (
        <MovieTile
          key={index}
          movie={movie}
          onClick={() => handleMovieClick(movie.name)}
        />
      ))}
    </main>
  );
};

export default Main;
