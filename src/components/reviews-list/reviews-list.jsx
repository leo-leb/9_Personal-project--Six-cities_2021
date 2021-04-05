import React from 'react';
import {useSelector} from 'react-redux';

import ReviewsItem from '../reviews-item/reviews-item';
import {getTenReviewsByDateDecrease} from '../../selectors';

const ReviewsList = () => {
  const {reviews} = useSelector((state) => state.ROOM);

  const filteredReviews = getTenReviewsByDateDecrease(reviews);

  return (<>
    <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
    <ul className="reviews__list">
      {filteredReviews.map((review, i) => <ReviewsItem review={review} key={review + i} />)}
    </ul>
  </>
  );
};

export default ReviewsList;
