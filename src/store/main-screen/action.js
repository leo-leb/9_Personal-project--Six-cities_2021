import offers from '../../mocks/offers';
import {getFilteredOffersByCity, getFilteredOffersById, getFilteredOffersByPriceIncrease, getFilteredOffersByPriceReduce, getFilteredOffersByRate} from '../../common';

export const ActionType = {
  CHANGE_CITY: `main/changeCity`,
  CHANGE_ACTIVE_CARD: `main/changeActiveCard`,
  UPDATE_OFFERS: `main/updateOffers`,
  SORT_OFFERS_PRICE_INC: `main/sortOffersByPriceInc`,
  SORT_OFFERS_PRICE_RED: `main/sortOffersByPriceRed`,
  SORT_OFFERS_RATE: `main/sortOffersByRate`
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),

  changeActiveCard: (id) => {
    let activeCard = getFilteredOffersById(offers, id);

    return {
      type: ActionType.CHANGE_ACTIVE_CARD,
      payload: activeCard
    };
  },

  updateOffers: (city) => {
    let offersList = getFilteredOffersByCity(offers, city);

    return {
      type: ActionType.UPDATE_OFFERS,
      payload: offersList
    };
  },

  sortOffersByPriceIncrease: (city) => {
    let offersList = getFilteredOffersByPriceIncrease(offers, city);

    return {
      type: ActionType.SORT_OFFERS_PRICE_INC,
      payload: offersList
    };
  },

  sortOffersByPriceReduce: (city) => {
    let offersList = getFilteredOffersByPriceReduce(offers, city);

    return {
      type: ActionType.SORT_OFFERS_PRICE_RED,
      payload: offersList
    };
  },

  sortOffersByRate: (city) => {
    let offersList = getFilteredOffersByRate(offers, city);

    return {
      type: ActionType.SORT_OFFERS_RATE,
      payload: offersList
    };
  }
};
