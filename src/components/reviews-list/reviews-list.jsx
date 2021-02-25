import React from 'react';
import Types from '../../types';
import ReviewTemplate from '../review-template/review-template';
import PropTypes from 'prop-types';

const ReviewsList = (props) => {
  const {reviews} = props;

  return (<>
    <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
    <ul className="reviews__list">
      {reviews.map((review, i) => <ReviewTemplate key={review + i} review={review}/>)}
    </ul>
  </>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(Types.REVIEW)
};

export default ReviewsList;
