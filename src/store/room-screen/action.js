import offers from '../../mocks/offers';
import reviews from '../../mocks/offers';
import {getUpdatedOffer, getFilteredReviewsByOffer, getThreeNeighboringOffers} from '../../common';

export const ActionType = {
  CHANGE_ID: `room/changeCity`,
  UPDATE_OFFER: `room/updateOffer`,
  UPDATE_REVIEWS: `room/updateReviews`,
  UPDATE_NEIGHBOR_OFFERS: `room/updateOffers`,
};

export const ActionCreator = {
  changeId: (id) => ({
    type: ActionType.CHANGE_ID,
    payload: id
  }),

  updateOffer: (id) => {
    const offer = getUpdatedOffer(offers, id);

    return {
      type: ActionType.UPDATE_OFFER,
      payload: offer
    };
  },

  updateReviews: (id) => {
    const reviewsList = getFilteredReviewsByOffer(reviews, id);

    return {
      type: ActionType.UPDATE_REVIEWS,
      payload: reviewsList
    };
  },

  updateNeighborOffers: (id) => {
    const offersList = getThreeNeighboringOffers(offers, id);

    return {
      type: ActionType.UPDATE_NEIGHBOR_OFFERS,
      payload: offersList
    };
  }
};
