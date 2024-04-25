import {SWITCH_WALLET} from '../types';

const INITIAL_STATE = {
  walletData: null,
  walletName: '',
  evmAddress: '',
  walletId: '',
  appPin: '',
};
/************************************** Wallet reducer ****************************************************/
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SWITCH_WALLET:
      const {walletData, walletName, addressId} = action.payload;
      return {
        ...state,
        walletData: action.payload,
        evmAddress: walletData,
        walletName: walletName,
        walletId: addressId,
      };
    default:
      return state;
  }
};
