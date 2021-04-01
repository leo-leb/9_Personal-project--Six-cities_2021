import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';
import {AppRoutes} from '../../consts';

const BadRequest = ({code}) => {
  const onButtonClick = (evt) => {
    evt.preventDefault();
    ReactDOM.unmountComponentAtNode(document.querySelector(`#modal`));
  };

  return (
    <div
      className="modal-window"
      style={{
        width: `auto`,
        height: `auto`,
        backgroundColor: `white`,
        padding: `10px`,
        border: `2px solid #4481c3`
      }}
    >
      <h1>{code.number}. {code.description}</h1>
      <div style={{display: `flex`, flexDirection: `row`, justifyContent: `space-between`}}>
        <button
          onClick={onButtonClick}
        >
          <Link to={AppRoutes.MAIN}>Вернуться на главную</Link>
        </button>
        <button
          onClick={onButtonClick}
        >Закрыть</button>
      </div>
    </div>
  );
};

BadRequest.propTypes = {
  code: PropTypes.object
};

export default BadRequest;
