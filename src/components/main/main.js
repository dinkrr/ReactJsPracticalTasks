import './main.css';
import React, { useState } from 'react';
import Counter from '../counter';
import SearchForm from '../search-form';
import GenreSelector from '../genre-selector';
import MovieTile from '../movie-tile/movie-tile';
import MovieDetails from '../movie-details/movie-details';
import SortControl from '../sort-control/sort-control';
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

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSortChange = (newValue) => {
    console.log('Sort changed to:', newValue);
  };

  return (
    <main>
      <Counter />
      <SearchForm />
      <div className="filter-controls">
        <GenreSelector />
        <SortControl
          currentSelection="releaseDate"
          onSelectionChange={handleSortChange}
        />
      </div>
      <div>
        {movies.map((movie, index) => (
          <MovieTile
            key={index}
            movie={movie}
            onClick={() => handleMovieClick(movie)}
          />
        ))}
      </div>
      {selectedMovie && <MovieDetails movie={selectedMovie} />}
    </main>
  );
};

export default Main;
