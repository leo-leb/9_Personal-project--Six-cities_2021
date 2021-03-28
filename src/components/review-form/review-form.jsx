import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';

import {stars} from '../../consts';
import {postReview} from "../../store/api-actions";
import Types from '../../types';

const ReviewForm = (props) => {
  const {id} = props;

  const dispatch = useDispatch();

  const [info, setInfo] = useState({
    rate: null,
    review: null
  });

  const [validity, setValidity] = useState({
    rate: false,
    review: false
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch(postReview(id, {
      comment: info.review,
      rating: info.rate
    }));

    setInfo({
      rate: null,
      review: null
    });

    setValidity({
      rate: false,
      review: false
    });

    Array.from(document.getElementsByClassName(`form__rating-input`)).forEach((item) => {
      item.checked = false;
    });
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {stars.map((star, i) => (
          <React.Fragment key={star + i}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={star}
              id={star + `-stars`}
              type="radio"
              onChange={(evt) => {
                setInfo({
                  ...info,
                  rate: evt.target.value
                });
                if (evt.target.checkValidity()) {
                  setValidity({
                    ...validity,
                    rate: true
                  });
                } else {
                  setValidity({
                    ...validity,
                    rate: false
                  });
                }
              }}
              required
            />
            <label htmlFor={star + `-stars`} className="reviews__rating-label form__rating-label" title="perfect">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={info.review === null ? `` : info.review}
        minLength="50"
        maxLength="350"
        onChange={(evt) => {
          setInfo({
            ...info,
            review: evt.target.value
          });
          if (evt.target.checkValidity()) {
            setValidity({
              ...validity,
              review: true
            });
          } else {
            setValidity({
              ...validity,
              review: false
            });
          }
        }}
        required
      ></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={validity.rate && validity.review ? false : true}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

ReviewForm.propTypes = {
  id: PropTypes.number,
  reviews: PropTypes.arrayOf(Types.REVIEW)
};

export default ReviewForm;
