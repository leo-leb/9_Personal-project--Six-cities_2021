import React, {useState} from 'react';

import {stars} from '../../consts';

const ReviewForm = () => {
  const [review, setReview] = useState({
    rate: 0,
    description: 0,
  });

  return (
    <form className="reviews__form form" action="#" method="post">
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
                setReview({
                  ...review,
                  rate: evt.target.value
                });
              }}
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
        onChange={(evt) => {
          setReview({
            ...review,
            description: evt.target.value
          });
        }}
      ></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
      </div>
    </form>
  );
};

export default ReviewForm;
