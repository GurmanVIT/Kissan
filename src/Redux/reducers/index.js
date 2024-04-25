import {combineReducers} from 'redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import WalletReducer from './WalletReducer';
import CurrentWalletReducer from './CurrentWalletReducer';

const appReducer = combineReducers({
  walletReducer: WalletReducer,
  currentWallet: CurrentWalletReducer,
});

export default rootReducer = (state, action) => {
  return appReducer(state, action);
};

export const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk));
