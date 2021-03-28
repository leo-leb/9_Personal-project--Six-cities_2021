import {NameSpace} from '../reducer';

export const getReviews = (state) => state[NameSpace.ROOM].reviews;
export const getNearOffers = (state) => state[NameSpace.ROOM].offers;
