import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoutes} from '../../consts';

const NotFoundScreen = () => {
  return (
    <div className="page">

      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link header__logo-link--active" to={AppRoutes.MAIN}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="container">
        <h1>404. Page not found</h1>
        <Link to={AppRoutes.MAIN}>Вернуться на главную</Link>
      </main>

    </div>
  );
};

export default NotFoundScreen;
