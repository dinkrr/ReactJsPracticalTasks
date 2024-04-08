import React from 'react';
import { render } from '@testing-library/react';
import MovieDetails from '../movie-details';

describe('MovieDetails', () => {
  const movie = {
    imageUrl: 'https://example.com/image.jpg',
    name: 'Example Movie',
    releaseYear: 2021,
    rating: 8.5,
    duration: '2h 30m',
    description: 'Description of Example Movie'
  };

  it('renders correctly with movie details', () => {
    const { container } = render(<MovieDetails movie={movie} />);
    const img = container.querySelector('img');
    const movieName = container.querySelector('.movie-name');
    const releaseYear = container.querySelector('.release-year');
    const rating = container.querySelector('.rating');
    const duration = container.querySelector('.duration');
    const description = container.querySelector('.description');

    expect(img).toHaveAttribute('src', movie.imageUrl);
    expect(img).toHaveAttribute('alt', movie.name);
    expect(movieName).toHaveTextContent(movie.name);
    expect(releaseYear).toHaveTextContent(`Release Year: ${movie.releaseYear}`);
    expect(rating).toHaveTextContent(`Rating: ${movie.rating}`);
    expect(duration).toHaveTextContent(`Duration: ${movie.duration}`);
    expect(description).toHaveTextContent(`Description: ${movie.description}`);
  });
});
