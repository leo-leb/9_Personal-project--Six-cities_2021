import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main-page/main-page';

const App = (props) => {
  const {places} = props;

  return (
    <MainPage places={places}/>
  );
};

App.propTypes = {
  places: PropTypes.array.isRequired,
};

export default App;
