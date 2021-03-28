import React, {useRef} from 'react';
import {Link, Redirect} from 'react-router-dom';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {login} from "../../store/api-actions";

import {Routes, AuthorizationStatus} from '../../consts';
import {getAuthStatus} from '../../store/root/selectors';

const SignInScreen = (props) => {
  const {onSubmit, authStatus} = props;

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  };

  if (authStatus === AuthorizationStatus.AUTH) {
    return (
      <Redirect to={Routes.MAIN} />
    );
  }

  return (
    <div className="page page--gray page--login">

      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link header__logo-link--active" to={Routes.MAIN}>
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
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={emailRef}
                  className="login__input form__input"
                  type="text"
                  name="email"
                  placeholder="Email"
                  required=""
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="text"
                  name="password"
                  placeholder="Password"
                  required=""
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

const mapStateToProps = (state) => ({
  authStatus: getAuthStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  }
});

SignInScreen.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  authStatus: PropTypes.string.isRequired
};

export {SignInScreen};
export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
