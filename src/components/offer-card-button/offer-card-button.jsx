import React from 'react';
import PropTypes from 'prop-types';

const FavoriteButton = (props) => {
  const {name, setName, type} = props;

  return (
    <button
      className={name ?
        `${type.name}__bookmark-button ${type.name}__bookmark-button--active button` :
        `${type.name}__bookmark-button button`
      }
      type="button"
      onClick={() => {
        setName(!name);
      }}
    >
      <svg
        className={type.name + `__bookmark-icon`}
        width={type.width}
        height={type.height}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
};

FavoriteButton.propTypes = {
  name: PropTypes.bool,
  setName: PropTypes.func,
  type: PropTypes.object
};

export default FavoriteButton;
