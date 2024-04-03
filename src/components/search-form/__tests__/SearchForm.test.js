import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchForm from '../search-form';

test('renders search form correctly', () => {
  const { getByPlaceholderText, getByText } = render(<SearchForm />);
  
  expect(getByText('Find your movie')).toBeInTheDocument();
  expect(getByPlaceholderText('What do you want to watch?')).toBeInTheDocument();
  expect(getByText('Search')).toBeInTheDocument();
});

test('updates search query when input changes', () => {
  const { getByPlaceholderText } = render(<SearchForm />);
  const input = getByPlaceholderText('What do you want to watch?');
  
  fireEvent.change(input, { target: { value: 'action' } });
  
  expect(input.value).toBe('action');
});

test('submits search query when form is submitted', () => {
  const handleSubmit = jest.fn();
  const { getByText } = render(<SearchForm onSubmit={handleSubmit} />);
  
  fireEvent.click(getByText('Search'));
  
  expect(handleSubmit).toHaveBeenCalledTimes(1);
});
