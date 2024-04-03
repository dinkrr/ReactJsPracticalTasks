import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from '../counter';

describe('Counter should work as expected',() => {
  test('renders the counter with initial value', () => {
    const { container  } = render(<Counter />);
    const countElement = container.querySelector('#counter-value');
    expect(countElement).toBeInTheDocument();
  });

  test('increments the count when the "+" button is clicked', () => {
    const { container } = render(<Counter />);
    const incrementButton = container.querySelector('#btn-incr');
    const countElement = container.querySelector('#counter-value');

    fireEvent.click(incrementButton);

    expect(countElement.textContent).toBe('1');
  });

  test('decrements the count when the "-" button is clicked', () => {
    const { container } = render(<Counter />);
    const decrementButton = container.querySelector('#btn-decr');
    const countElement = container.querySelector('#counter-value');

    fireEvent.click(decrementButton);

    expect(countElement.textContent).toBe('-1');
  });
});
