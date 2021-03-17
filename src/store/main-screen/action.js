import {dataArrayAdapter} from '../../common';

export const ActionType = {
  LOAD_OFFERS: `data/loadOffers`,
};

export const ActionCreator = {
  loadOffers: (offers) => {
    let updatedData = dataArrayAdapter(offers);
    return {
      type: ActionType.LOAD_OFFERS,
      payload: updatedData
    };
  }
};
