import React, {useRef} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import {login} from "../../store/api-actions";
import {AppRoute, AuthorizationStatus} from '../../const';

const SignInScreen = () => {
  const {authStatus} = useSelector((state) => state.ROOT);

  const dispatch = useDispatch();

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    if (evt.target.checkValidity()) {
      dispatch(login({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }));
    }
  };

  const handleInputChange = (evt) => {
    if (evt.target.validity.patternMismatch) {
      evt.target.setCustomValidity(`Email должен соответствовать формату x@x.xx`);
    } else {
      evt.target.setCustomValidity(``);
    }
    evt.target.reportValidity();
  };

  if (authStatus === AuthorizationStatus.AUTH) {
    return (
      <Redirect to={AppRoute.MAIN} />
    );
  }

  return (
    <div className="page page--gray page--login">

      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link header__logo-link--active" to={AppRoute.MAIN}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action=""
              onSubmit={handleFormSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden" htmlFor="email">E-mail</label>
                <input
                  ref={emailRef}
                  className="login__input form__input"
                  type="text"
                  name="email"
                  id="email"
                  data-testid="email"
                  placeholder="Email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden" htmlFor="password">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="text"
                  name="password"
                  id="password"
                  data-testid="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>

    </div>
  );
};

export default SignInScreen;
