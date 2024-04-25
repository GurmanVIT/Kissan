import {
  REGISTER_FORM_UPDATE,
  SAVE_INIT_DETAILS,
  CREATE_WALLET_FORM_UPDATE,
  FETCH_TOKEN_INIT,
  FETCH_TOKEN_FAIL,
  FETCH_TOKEN_SUCCESS,
  SWITCH_WALLET,
  FETCH_WITHDRAW_SUCCESS,
  FETCH_WITHDRAW_FAIL,
  FETCH_DEPOSIT_SUCCESS,
} from '../types';

import END_POINT, {DUMMY_USER_URL} from '../../Network/Endpoints';
import {APIClient} from '../../Network/APIClient';
import {Actions} from 'react-native-router-flux';
import Singleton from '../../helpers/Singleton';
import {
  SOME_WENT_WRONG,
  USER_DATA,
  ACCESS_TOKEN,
} from '../../helpers/Constants';
import {colors} from '../../theme';
import {reject} from 'lodash';
import {Platform} from 'react-native';
import {resolve} from 'path-browserify';
import {err} from 'react-native-svg/lib/typescript/xml';

/**************************************Update prop values ****************************************************/
export const walletFormUpdate = ({prop, value}) => {
  return {
    type: CREATE_WALLET_FORM_UPDATE,
    payload: {prop, value},
  };
};
export const saveInitDetails = data => {
  return dispatch => {
    dispatch({type: SAVE_INIT_DETAILS, payload: data});
  };
};
/************************************** CREATE WALLET ****************************************************/
export const createWalletAction =
  ({name, coin, network, address}) =>
  dispatch => {
    return new Promise((resolve, reject) => {
      let data = [
        {
          name: 'address',
          data: address,
        },
        {
          name: 'coin',
          data: coin,
        },
        {
          name: 'netWork',
          data: network,
        },
        {
          name: 'name',
          data: name,
        },
        {
          name: 'device_token',
          data: Singleton.getInstance().deviceToken,
        },
      ];

      console.log('REQUEST===', data);

      APIClient.getInstance()
        .postFile(END_POINT.createWallet, data)
        .then(response => {
          console.log('createWalletAction_res', response);
          Singleton.getInstance().showMsg('Wallet created successfully.');
          resolve(response?.data);
        })
        .catch(error => {
          console.log('createWalletAction_err', error);
          // Singleton.getInstance().showError(error);
          reject(error);
        });
    });
  };

/************************************** GET TOKEN LIST ****************************************************/

export const getActiveTokenList = id => dispatch => {
  return new Promise((resolve, reject) => {
    dispatch({type: FETCH_TOKEN_INIT});
    let data = {addressId: id};
    APIClient.getInstance()
      .post(END_POINT.getActiveTokens, data)
      .then(response => {
        console.log('YES');
        console.log('response--', response);
        dispatch({
          type: FETCH_TOKEN_SUCCESS,
          payload: response?.data,
        });
      })
      .catch(error => {
        console.log('NO');

        console.log('error--', error);
        Singleton.getInstance().showError(
          'Unable to fetch list, Please try again.',
        );
        dispatch({type: FETCH_TOKEN_FAIL});
      });
  });
};

/************************************** GET ALL HISTORY LIST ****************************************************/

export const getAllHistoryList =
  ({page, limit, coinId, addressId}) =>
  dispatch => {
    return new Promise((resolve, reject) => {
      dispatch({type: FETCH_TOKEN_INIT});
      APIClient.getInstance()
        .get(
          END_POINT.getAllHistory +
            `?page=${page}&limit=${limit}&coinId=${coinId}&addressId=${addressId}`,
        )
        .then(response => {
          console.log('responsewithdraw--', response);
          resolve(response);
        })
        .catch(error => {
          console.log('error--', error);
          reject(error);
          Singleton.getInstance().showError(
            'Unable to fetch list, Please try again.',
          );
        });
    });
  };
/************************************** GET WITHDRAW LIST ****************************************************/

export const getWithdrawList =
  ({page, limit, coinId, addressId}) =>
  dispatch => {
    return new Promise((resolve, reject) => {
      dispatch({type: FETCH_TOKEN_INIT});
      APIClient.getInstance()
        .get(
          END_POINT.getwithdrawList +
            `?page=${page}&limit=${limit}&coinId=${coinId}&addressId=${addressId}`,
        )
        .then(response => {
          console.log('responsewithdraw--', response);
          dispatch({
            type: FETCH_WITHDRAW_SUCCESS,
            payload: response?.data,
          });
        })
        .catch(error => {
          console.log('error--', error);
          Singleton.getInstance().showError(
            'Unable to fetch list, Please try again.',
          );
          dispatch({type: FETCH_WITHDRAW_FAIL});
        });
    });
  };

/************************************** GET Deposit LIST ****************************************************/

export const getdepositList =
  ({page, limit, coinId, addressId}) =>
  dispatch => {
    return new Promise((resolve, reject) => {
      dispatch({type: FETCH_TOKEN_INIT});
      APIClient.getInstance()
        .get(
          END_POINT.getdepositList +
            `?page=${page}&limit=${limit}&coinId=${coinId}&addressId=${addressId}`,
        )
        .then(response => {
          console.log('depositlist--', response);
          dispatch({
            type: FETCH_DEPOSIT_SUCCESS,
            payload: response?.data,
          });
        })
        .catch(error => {
          console.log('error--', error);
          Singleton.getInstance().showError(
            'Unable to fetch list, Please try again.',
          );
          dispatch({type: FETCH_WITHDRAW_FAIL});
        });
    });
  };

export const addCustomToken =
  ({contractAddress, coinSymbol, network, addressId, decimals}) =>
  dispatch => {
    return new Promise((resolve, reject) => {
      dispatch({type: FETCH_TOKEN_INIT});

      let data = [
        {
          name: 'address',
          data: contractAddress,
        },
        {
          name: 'coin',
          data: coinSymbol,
        },
        {
          name: 'netWork',
          data: `${network}`,
        },
        {
          name: 'addressId',
          data: `${addressId}`,
        },
        {
          name: 'decimals',
          data: `${decimals}`,
        },
      ];

      APIClient.getInstance()
        .postFile(END_POINT.addToken, data)
        .then(response => {
          console.log('AddCustomTokenRes--', response);
          resolve(response);
        })
        .catch(error => {
          console.log('AddCustomTokenError--', error);
          reject(error);
        });
    });
  };

/*** Save Wallet Data*/

export const saveWithdrawReq =
  ({txHash, toAddress, amount, addressId, coinId}) =>
  dispatch => {
    return new Promise((resolve, reject) => {
      let data = [
        {
          name: 'tx_hash',
          data: txHash,
        },
        {
          name: 'toAddress',
          data: toAddress,
        },
        {
          name: 'amount',
          data: `${amount}`,
        },
        {
          name: 'addressId',
          data: `${addressId}`,
        },
        {
          name: 'coinId',
          data: `${coinId}`,
        },
      ];

      console.log('REQUEST===', data);

      APIClient.getInstance()
        .postFile(END_POINT.addWithdrawRequest, data)
        .then(response => {
          console.log('createWalletAction_res', response);
          Singleton.getInstance().showMsg('Wallet created successfully.');
          resolve(response?.data);
        })
        .catch(error => {
          console.log('createWalletAction_err', error);
          // Singleton.getInstance().showError(error);
          reject(error);
        });
    });
  };

/*** Save Wallet Data*/
export const saveWalletData = data => {
  return dispatch => {
    dispatch({type: SWITCH_WALLET, payload: data});
  };
};
