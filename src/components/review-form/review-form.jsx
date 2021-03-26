import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {stars} from '../../consts';
import {postReview} from "../../store/api-actions";
import Types from '../../types';

const ReviewForm = (props) => {
  const {id, postComment} = props;

  const ratingRef = useRef();
  const commentRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    postComment(id, {
      comment: commentRef.current.value,
      rating: ratingRef.current.value
    });

    commentRef.current.value = ``;
  };

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
              ref={ratingRef}
              id={star + `-stars`}
              type="radio"
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
        ref={commentRef}
        placeholder="Tell how was your stay, what you like and what can be improved"
      ></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled=""
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  postComment(id, review) {
    dispatch(postReview(id, review));
  }
});

ReviewForm.propTypes = {
  postComment: PropTypes.func,
  id: PropTypes.number,
  reviews: PropTypes.arrayOf(Types.REVIEW)
};

export {ReviewForm};
export default connect(null, mapDispatchToProps)(ReviewForm);
