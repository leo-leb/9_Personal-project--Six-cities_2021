import offers from '../../mocks/offers';
import {getFilteredOffersById} from '../../selectors';

export const ActionType = {
  CHANGE_ACTIVE_CARD: `room/changeActiveCard`
};

export const ActionCreator = {
  changeActiveCard: (id) => {
    let activeCard = getFilteredOffersById(offers, id);

    return {
      type: ActionType.CHANGE_ACTIVE_CARD,
      payload: activeCard
    };
  },
};
