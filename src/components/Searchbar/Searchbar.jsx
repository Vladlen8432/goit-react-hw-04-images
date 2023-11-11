import { Component } from 'react';
import css from './SearchbarStyles.module.css';
import { FaSearch } from 'react-icons/fa';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    this.setState({
      query: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { query } = this.state;

    if (query.trim() === '') {
      alert('Please, enter a keyword');
      return;
    }

    this.props.onSubmit(query);
  };

  render() {
    const { query } = this.state;

    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.button}>
            <span className={css.buttonLabel}>
              <FaSearch
                style={{
                  width: '16px',
                  height: '16px',
                  color: 'rgba(0, 0, 0, 0.5)',
                }}
              />
            </span>
          </button>

          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
