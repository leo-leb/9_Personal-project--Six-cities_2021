import {NameSpace} from '../reducer';

export const getAppStatus = (state) => state[NameSpace.ROOT].isAppReady;
export const getAuthStatus = (state) => state[NameSpace.ROOT].authStatus;
export const getActiveOffer = (state) => state[NameSpace.ROOT].activeOffer;
