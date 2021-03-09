export const ActionType = {
  CHANGE_ID: `favorite/changeId`,
  UPDATE_OFFERS: `favorite/updateOffers`,
  UPDATE_CITIES_LIST: `favorite/updateCitiesList`
};

export const ActionCreator = {
  changeId: (id) => ({
    type: ActionType.CHANGE_ID,
    payload: id
  }),

  updateOffers: (offers) => ({
    type: ActionType.CHANGE_ID,
    payload: offers
  }),

  updateCitiesList: (offers) => {
    let citiesList = [];

    offers
      .filter((offer) => {
        return offer.status === `favorite`;
      })
      .forEach((offer) => {
        if (citiesList.includes(offer.city) !== true) {
          citiesList.push(offer.city);
        }
      });

    return {
      type: ActionType.UPDATE_NEIGHBOR_OFFERS,
      payload: citiesList
    };
  }
};
