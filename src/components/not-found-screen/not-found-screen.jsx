import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

import {AppRoute, AuthorizationStatus} from '../../const';

const NotFoundScreen = () => {
  const {authStatus} = useSelector((state) => state.ROOT);

  return (
    <div className="page">

      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link header__logo-link--active" to={AppRoute.MAIN}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={authStatus === AuthorizationStatus.AUTH ? AppRoute.FAVORITES : AppRoute.SIGNIN}>
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    {authStatus === AuthorizationStatus.AUTH ? <span className="header__user-name user__name">Oliver.conner@gmail.com</span> : <span className="header__login">Sign in</span>}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="container">
        <h1>404. Page not found</h1>
        <Link to={AppRoute.MAIN}>Вернуться на главную</Link>
      </main>

    </div>
  );
};

export default NotFoundScreen;
