import React from 'react';
import PropTypes from 'prop-types';

const FavoriteButton = (props) => {
  const {name, setName} = props;

  return (
    <button
      className={name ?
        `place-card__bookmark-button place-card__bookmark-button--active button` :
        `place-card__bookmark-button button`
      }
      type="button"
      onClick={() => {
        setName(!name);
      }}
    >
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
};

FavoriteButton.propTypes = {
  name: PropTypes.bool,
  setName: PropTypes.func,
};

export default FavoriteButton;
