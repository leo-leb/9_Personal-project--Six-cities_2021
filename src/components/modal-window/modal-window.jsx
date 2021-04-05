import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {AppRoute} from '../../const';

const ModalWindow = ({code}) => {
  const handleButtonClick = (evt) => {
    evt.preventDefault();
    ReactDOM.unmountComponentAtNode(document.querySelector(`#modal`));
  };

  const parent = document.querySelector(`#modal`);
  const top = document.documentElement.clientHeight / 2;
  parent.style.top = window.scrollY + top + `px`;

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
      <h1>{code.number ? code.number : code.name}. {code.description}</h1>
      <div style={{display: `flex`, flexDirection: `row`, justifyContent: `space-between`}}>
        {code.number ? <button onClick={handleButtonClick}><Link to={AppRoute.MAIN}>Вернуться на главную</Link></button> : null}
        <button onClick={handleButtonClick}>Закрыть</button>
      </div>
    </div>
  );
};

ModalWindow.propTypes = {
  code: PropTypes.object.isRequired
};

export default ModalWindow;
