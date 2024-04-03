import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import GenreSelector from '../genre-selector';

test('renders genre options correctly', () => {
  const { getByText } = render(<GenreSelector />);
  
  expect(getByText('all')).toBeInTheDocument();
  expect(getByText('documentary')).toBeInTheDocument();
  expect(getByText('comedy')).toBeInTheDocument();
  expect(getByText('horror')).toBeInTheDocument();
  expect(getByText('crime')).toBeInTheDocument();
});

test('selects genre when clicked', () => {
  const { getByText } = render(<GenreSelector />);
  
  fireEvent.click(getByText('comedy'));
  
  expect(getByText('comedy')).toHaveClass('selected');
});

test('deselects previous genre when new one is clicked', () => {
  const { getByText } = render(<GenreSelector />);
  
  fireEvent.click(getByText('comedy'));
  fireEvent.click(getByText('horror'));
  
  expect(getByText('comedy')).not.toHaveClass('selected');
  expect(getByText('horror')).toHaveClass('selected');
});
