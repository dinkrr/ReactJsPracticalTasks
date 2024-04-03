// SearchForm.js

import styles from './search-form.module.css';
import React from 'react';

const SEARCH_PLACEHOLDER = 'What do you want to watch?';

class SearchForm extends React.Component {
  constructor() {
    super();
    this.state = { searchQuery: '' };
  }

  handleChange(e) {
    this.setState({ searchQuery: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.onSubmit) {
      this.props.onSubmit(this.state.searchQuery);
    }
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.title}>Find your movie</div>
        <form
          className={styles.form}
          onSubmit={(event) => this.handleSubmit(event)}
        >
          <input
            type="text"
            value={this.state.searchQuery}
            onChange={(event) => this.handleChange(event)}
            placeholder={SEARCH_PLACEHOLDER}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default SearchForm;
