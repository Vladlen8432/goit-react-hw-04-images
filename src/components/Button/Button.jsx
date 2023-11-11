import { Component } from 'react';
import css from './Button.module.css';

class Button extends Component {
  render() {
    const { onClick } = this.props;

    return (
      <div className={css.buttonContainer}>
        <button type="button" className={css.button} onClick={onClick}>
          Load more
        </button>
      </div>
    );
  }
}

export default Button;
