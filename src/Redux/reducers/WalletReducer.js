import {
  CREATE_WALLET,
  SAVE_INIT_DETAILS,
  CREATE_WALLET_FORM_UPDATE,
  FETCH_TOKEN_INIT,
  FETCH_TOKEN_FAIL,
  FETCH_TOKEN_SUCCESS,
  FETCH_WITHDRAW_SUCCESS,
  FETCH_DEPOSIT_SUCCESS,
} from '../types';

const INITIAL_STATE = {
  importMnemonics: '',
  mnemonics: '',
  walletName: '',
  appPin: '',
  activeTokenList: [],
  loader: false,
  totalbalanceUSDT: 0,
  totalbalanceINR: 0,
  withdrawlist: [],
  depositlist: [],
};

/************************************** Wallet reducer ****************************************************/
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_WALLET_FORM_UPDATE:
      return {...state, [action.payload.prop]: action.payload.value};
    case SAVE_INIT_DETAILS:
      return {
        ...state,
        walletName: action.payload.walletname,
        appPin: action.payload.pin,
      };
    case FETCH_TOKEN_INIT:
      let isLoading = true;
      if (state?.activeTokenList.length > 0) {
        isLoading = false;
      }

      return {...state, loader: isLoading};
    case FETCH_TOKEN_FAIL:
      return {...state, loader: false};
    case FETCH_TOKEN_SUCCESS:
      return {
        ...state,
        activeTokenList: action.payload.coin_list,
        totalbalanceUSDT: action.payload.total_balance_usdt,
        totalbalanceINR: action.payload.total_balance_inr,
        loader: false,
      };
    case FETCH_WITHDRAW_SUCCESS:
      return {...state, withdrawlist: action.payload, loader: false};
    case FETCH_DEPOSIT_SUCCESS:
      return {...state, withdrawlist: action.payload, loader: false};
    default:
      return state;
  }
};
