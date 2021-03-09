import offers from '../../mocks/offers';
import {getFilteredOffersByCity} from '../../common';

export const ActionType = {
  CHANGE_CITY: `main/changeCity`,
  UPDATE_OFFERS: `main/updateOffers`
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),

  updateOffers: (city) => {
    let offersList = getFilteredOffersByCity(offers, city);

    return {
      type: ActionType.UPDATE_OFFERS,
      payload: offersList
    };
  }
};
