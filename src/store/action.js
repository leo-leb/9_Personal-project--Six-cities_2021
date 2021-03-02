import offers from '../mocks/offers';

export const ActionType = {
  CHANGE_CITY: `list/changeCity`,
  UPDATE_OFFERS: `list/updateOffers`
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),

  updateOffers: (city) => {
    const generalOffersList = offers.forMainScreen;
    let offersList = generalOffersList.filter((offer) => {
      return offer.city === city.name;
    });

    return {
      type: ActionType.UPDATE_OFFERS,
      payload: offersList
    };
  }
};
