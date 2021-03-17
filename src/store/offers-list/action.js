import {getFilteredOffersById} from '../../selectors';

export const ActionType = {
  CHANGE_CARD: `offersList/changeActiveCard`
};

export const ActionCreator = {
  changeActiveCard: (offers, id) => {
    let activeOfferCard = getFilteredOffersById(offers, id);

    return {
      type: ActionType.CHANGE_CARD,
      payload: activeOfferCard
    };
  }
};
