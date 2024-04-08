import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SortControl from '../sort-control';

describe('SortControl', () => {
  it('renders correctly with default selection', () => {
    const { container } = render(<SortControl currentSelection="releaseDate" />);
    const label = container.querySelector('label[for="sort-select"]');
    const select = container.querySelector('#sort-select');

    expect(label).toBeInTheDocument();
    expect(select).toBeInTheDocument();
    expect(select.value).toBe('releaseDate');
  });

  it('calls onSelectionChange callback when selection changes', () => {
    const mockOnSelectionChange = jest.fn();
    const { container } = render(
      <SortControl currentSelection="releaseDate" onSelectionChange={mockOnSelectionChange} />
    );
    const select = container.querySelector('#sort-select');

    fireEvent.change(select, { target: { value: 'title' } });

    expect(mockOnSelectionChange).toHaveBeenCalledTimes(1);
    expect(mockOnSelectionChange).toHaveBeenCalledWith('title');
  });
});
