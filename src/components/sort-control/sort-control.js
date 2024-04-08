import React from 'react';
import './sort-control.css';

const SortControl = ({ currentSelection, onSelectionChange }) => {
  const handleSelectChange = (event) => {
    const newValue = event.target.value;
    onSelectionChange(newValue);
  };

  return (
    <div className="sort-control">
      <label htmlFor="sort-select" className="sort-label">Sort by:</label>
      <select
        id="sort-select"
        value={currentSelection}
        onChange={handleSelectChange}
        className="sort-select"
      >
        <option value="releaseDate" className="sort-option">Release Date</option>
        <option value="title" className="sort-option">Title</option>
      </select>
    </div>
  );
};

export default SortControl;
