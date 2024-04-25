import {IS_MAINNET} from '../helpers/Constants';
export const COMMON_URL = 'http://143.198.84.186:3002/v1/kisan';
export const DUMMY_USER_URL = 'https://www.w3schools.com/howto/img_avatar.png';
export const TERM_OF_USE = '';
export const PRIVACY_POLICY = '';
export const COOKIES = '';
export const HELP_SUPPORT = '';
export const BASE_URL = COMMON_URL;
const selectedNetwork = IS_MAINNET ? 'mainnet' : 'testnet';
console.log('IS_MAINNET====', selectedNetwork);

const BLOCKCHAIN_DATA = {
  bnb: {
    mainnet: {
      rpc: 'https://bsc-dataseed1.binance.org:443',
      chainId: 56,
    },
    testnet: {
      rpc: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
      chainId: 97,
    },
  },
};
export const BNB_RPC_URL = BLOCKCHAIN_DATA.bnb?.[selectedNetwork].rpc;
export const BNB_CHAIN_ID = BLOCKCHAIN_DATA.bnb?.[selectedNetwork].chainId;

const END_POINT = {
  createWallet: '/save_address',
  getActiveTokens: '/coin_list',
  getwithdrawList: '/history/withdraw',
  getAllHistory: '/all_history',
  getdepositList: '/history/deposit',
  addWithdrawRequest: '/withdraw_request',
  addToken:'/add_token'
};
export default END_POINT;
