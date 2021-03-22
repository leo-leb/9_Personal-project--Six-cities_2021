import {dataArrayAdapter} from '../../common';

export const ActionType = {
  CHANGE_STATUS: `favorites/changeStatus`,
  LOAD_FAVORITE_OFFERS: `favorites/loadOffers`
};

export const ActionCreator = {
  // changeAuthStatus: (status) => ({
  //   type: ActionType.CHANGE_STATUS,
  //   payload: status
  // }),
  loadOffers: (offers) => {
    let updatedData = dataArrayAdapter(offers);
    return {
      type: ActionType.LOAD_OFFERS,
      payload: updatedData
    };
  }
};
