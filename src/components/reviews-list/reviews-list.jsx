import React from 'react';

import ReviewsItem from '../reviews-item/reviews-item';
import {getFilteredReviews} from '../../selectors';
import {useSelector} from 'react-redux';

const ReviewsList = () => {
  const {reviews} = useSelector((state) => state.ROOM);

  const filteredReviews = getFilteredReviews(reviews);

  return (<>
    <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
    <ul className="reviews__list">
      {filteredReviews.map((review, i) => <ReviewsItem key={review + i} review={review}/>)}
    </ul>
  </>
  );
};

export default ReviewsList;
