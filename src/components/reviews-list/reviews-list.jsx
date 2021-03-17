import React from 'react';
import ReviewCard from '../review-card/review-card';
import PropTypes from 'prop-types';

const ReviewsList = (props) => {
  const {reviews} = props;

  return (<>
    <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
    <ul className="reviews__list">
      {reviews.map((review, i) => <ReviewCard key={review + i} review={review}/>)}
    </ul>
  </>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.array
};

export default ReviewsList;
