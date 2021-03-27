import React from 'react';
import PropTypes from 'prop-types';

import ReviewCard from '../review-card/review-card';
import {getFilteredReviews} from '../../selectors';

const ReviewsList = (props) => {
  const {reviews} = props;

  const filteredReviews = getFilteredReviews(reviews);

  return (<>
    <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
    <ul className="reviews__list">
      {filteredReviews.map((review, i) => <ReviewCard key={review + i} review={review}/>)}
    </ul>
  </>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.array
};

export default ReviewsList;
