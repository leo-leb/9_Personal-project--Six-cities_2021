import {ActionType} from './action';
import offers from '../mocks/offers';
import {cities} from '../consts';

const initialState = {
  city: cities[0],
  offersList: offers.forMainScreen.filter((offer) => {
    return offer.city === cities[0].name;
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload
      };
    case ActionType.UPDATE_OFFERS:
      return {
        ...state,
        offersList: action.payload
      };
    default:
      return state;
  }
};

export {reducer};
