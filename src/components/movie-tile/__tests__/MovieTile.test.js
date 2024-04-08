import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MovieTile from '../movie-tile';

describe('MovieTile', () => {
    const movie = {
      imageUrl: 'https://example.com/image.jpg',
      name: 'Example Movie',
      releaseYear: '2022',
      genres: ['Action', 'Adventure', 'Sci-Fi']
    };
  
    it('renders correctly with movie details', () => {
      const onClick = jest.fn();
      const { container } = render(<MovieTile movie={movie} onClick={onClick} />);
  
      // Check if the image is rendered correctly
      expect(container.querySelector('.movie-image img')).toBeInTheDocument();
  
      // Check if the movie name is rendered correctly
      expect(container.querySelector('.movie-name')).toHaveTextContent('Example Movie');
  
      // Check if the release year is rendered correctly
      expect(container.querySelector('.year-box')).toHaveTextContent('2022');
  
      // Check if the genres are rendered correctly
      expect(container.querySelector('.movie-genres')).toHaveTextContent('Action, Adventure, Sci-Fi');
    });
  
    it('calls onClick callback when clicked', () => {
      const onClick = jest.fn();
      const { container } = render(<MovieTile movie={movie} onClick={onClick} />);
  
      // Simulate a click on the movie tile
      fireEvent.click(container.querySelector('.movie-tile'));
  
      // Check if the onClick callback is called
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });