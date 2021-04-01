import React from 'react';
import PropTypes from 'prop-types';

import Types from '../../types';
import FavoritesList from '../favorites-list/favorites-list';

const FavoritesContent = ({offers}) => {
  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <FavoritesList offers={offers}/>
        </section>
      </div>
    </main>
  );
};

FavoritesContent.propTypes = {
  offers: PropTypes.arrayOf(Types.OFFER)
};

export default FavoritesContent;
