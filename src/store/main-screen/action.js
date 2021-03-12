import offers from '../../mocks/offers';
import {getFilteredOffersByCity, getFilteredOffersById, getFilteredOffersByPriceIncrease, getFilteredOffersByPriceReduce, getFilteredOffersByRate} from '../../selectors';

export const ActionType = {
  CHANGE_CITY: `main/changeCity`,
  CHANGE_CARD: `main/changeActiveCard`,
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
    let activeOfferCard = getFilteredOffersById(offers, id);

    return {
      type: ActionType.CHANGE_CARD,
      payload: activeOfferCard
    };
  },

  updateOffers: (city) => {
    let allOffers = getFilteredOffersByCity(offers, city);

    return {
      type: ActionType.UPDATE_OFFERS,
      payload: allOffers
    };
  },

  sortOffersByPriceIncrease: (city) => {
    let allOffers = getFilteredOffersByPriceIncrease(offers, city);

    return {
      type: ActionType.SORT_OFFERS_PRICE_INC,
      payload: allOffers
    };
  },

  sortOffersByPriceReduce: (city) => {
    let allOffers = getFilteredOffersByPriceReduce(offers, city);

    return {
      type: ActionType.SORT_OFFERS_PRICE_RED,
      payload: allOffers
    };
  },

  sortOffersByRate: (city) => {
    let allOffers = getFilteredOffersByRate(offers, city);

    return {
      type: ActionType.SORT_OFFERS_RATE,
      payload: allOffers
    };
  }
};
