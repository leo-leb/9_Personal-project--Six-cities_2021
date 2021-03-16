import {getFilteredOffersByCity, getFilteredOffersById, getFilteredOffersByPriceIncrease, getFilteredOffersByPriceReduce, getFilteredOffersByRate} from '../../selectors';

export const ActionType = {
  CHANGE_CITY: `main/changeCity`,
  LOAD_OFFERS: `data/loadOffers`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  CHANGE_CARD: `main/changeActiveCard`,
  SORT_OFFERS_CITY: `main/sortOffersByCity`,
  SORT_OFFERS_PRICE_INC: `main/sortOffersByPriceInc`,
  SORT_OFFERS_PRICE_RED: `main/sortOffersByPriceRed`,
  SORT_OFFERS_RATE: `main/sortOffersByRate`
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),

  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers
  }),

  sortOffersByCity: (offers, city) => {
    let offersByCity = getFilteredOffersByCity(offers, city);

    return {
      type: ActionType.SORT_OFFERS_CITY,
      payload: offersByCity
    };
  },

  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status
  }),

  sortOffersByPriceIncrease: (offers) => {
    let offersSorted = getFilteredOffersByPriceIncrease(offers);

    return {
      type: ActionType.SORT_OFFERS_PRICE_INC,
      payload: offersSorted
    };
  },

  sortOffersByPriceReduce: (offers) => {
    let offersSorted = getFilteredOffersByPriceReduce(offers);

    return {
      type: ActionType.SORT_OFFERS_PRICE_RED,
      payload: offersSorted
    };
  },

  sortOffersByRate: (offers) => {
    let offersSorted = getFilteredOffersByRate(offers);

    return {
      type: ActionType.SORT_OFFERS_RATE,
      payload: offersSorted
    };
  },

  changeActiveCard: (offers, id) => {
    let activeOfferCard = getFilteredOffersById(offers, id);

    return {
      type: ActionType.CHANGE_CARD,
      payload: activeOfferCard
    };
  },
};
