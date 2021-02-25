import React from 'react';
import dayjs from 'dayjs';
import Types from '../../types';

const ReviewsTemplate = (props) => {
  const {review} = props;
  const {name, avatar, rate, description, date} = review;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatar} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: rate}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{description}</p>
        <time
          className="reviews__time"
          dateTime={dayjs().set(`year`, date.year).set(`month`, date.month).set(`day`, date.day).format(`YYYY-MM-D`).toString()}
        >
          {dayjs().set(`year`, date.year).set(`month`, date.month).format(`MMMM YYYY`)}
        </time>
      </div>
    </li>
  );
};

ReviewsTemplate.propTypes = {
  review: Types.REVIEW
};

export default ReviewsTemplate;
