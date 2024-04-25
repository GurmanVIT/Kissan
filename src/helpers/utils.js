import Web3 from 'web3';
import {utils, Wallet} from 'ethers';
import {entropyToMnemonic, HDNode} from 'ethers/lib/utils';
import {validateMnemonic, mnemonicToSeed} from 'react-native-bip39';
import {BNB_RPC_URL} from '../Network/Endpoints';
import TOKEN_ABI from '../helpers/ABI/tokenContract.ABI.json';
import idaAbi from '../helpers/ABI//idaAbi.json';

/************************************** generate mnemonics methods ************************************/
export const generateMnemonics = () => {
  let a = utils.randomBytes(16);
  console.log('generateMnemonics =>', a);
  const mnemonics = entropyToMnemonic(a);
  console.log('generateMnemonics =>', mnemonics);
  return mnemonics;
};
/************************************** generate addresss methods ************************************/

export const generateAddressFromMnemonics = async mnemonics => {
  console.log('mnemonics====', mnemonics);
  // const seed = await mnemonicToSeed(mnemonics);
  let seed = await mnemonicToSeed(mnemonics);

  const hdNode = HDNode._fromSeed(seed);

  const wallet = hdNode.derivePath("m/44'/60'/0'/0/0");
  console.log('generateEthWallet =>', wallet);
  return wallet;
};
/************************************** validate mnemonics methods ************************************/

export const generateAddressFromMnemonics1 = mnemonics => {
  const wallet = Wallet.fromMnemonic(mnemonics);
  console.log('generateAddressFromMnemonics----- =>', mnemonics);
  return wallet;
};
export const validateMnemonics = mnemonics => {
  return new Promise((resolve, reject) => {
    try {
      const isValid = validateMnemonic(mnemonics);
      console.log('isValid-------', isValid, mnemonics);
      if (isValid) {
        resolve(isValid);
      } else {
        reject('Enter valid  Mnemonics');
      }
    } catch (error) {
      console.log('error-------', error, mnemonics);
    }
  });
};

export const getWeb3Object = rpcUrl => {
  return new Web3(rpcUrl);
};
// *************************** get user coin balance ********************************

export const getCoinBalance = async (rpcUrl, userAddress) => {
  let ethBal = await getWeb3Object(rpcUrl).eth.getBalance(userAddress);
  return ethBal;
};
// ***************************  get user token balance ********************************

export const getTokenBalance = async (rpcUrl, tokenAddress, address) => {
  console.log('chk tokenAddresss::::::', tokenAddress, address);
  try {
    const contract = await getContractObject(tokenAddress, rpcUrl, TOKEN_ABI);

    const decimals = await contract.methods.decimals().call();

    let result = await contract.methods.balanceOf(address).call();
    console.log('chk decimal::::::', decimals);
    let data = {balance: result, decimals: decimals};
    return data;
  } catch (error) {
    console.log('Error ==>> :', error);
    return error;
  }
};
// *************************** interaction with contact  ********************************

export const getContractObject = async (tokenAddress, rpcUrl, abi) => {
  try {
    let web3Object = getWeb3Object(rpcUrl);
    let tokenContractObject = new web3Object.eth.Contract(abi, tokenAddress);

    return tokenContractObject;
  } catch (e) {
    console.error('error ===>>', e);
  }
};

// *************************** get gas price ********************************

export const getGasPrice = rpcUrl => {
  return new Promise((resolve, reject) => {
    getWeb3Object(rpcUrl)
      .eth.getGasPrice()
      .then(gasPrice => {
        console.log('-----------------gasPrice-----------', gasPrice);
        resolve(gasPrice);
      })
      .catch(err => {
        console.log(':::::::::getGasPrice_ERR', err);
        reject(err);
      });
  });
};

export const getNonceValueDapp = async (rpcUrl, my_address) => {
  var nonce = await getWeb3Object(rpcUrl).eth.getTransactionCount(
    my_address,
    'latest',
  );
  return nonce;
};

function convertBase(num) {
  return {
    from: function (baseFrom) {
      return {
        to: function (baseTo) {
          return parseInt(num, baseFrom).toString(baseTo);
        },
      };
    },
  };
}
export function hex2dec(num) {
  return convertBase(num).from(16).to(10);
}

export const validateEthAddress = text => {
  var web3BNB = getWeb3Object(BNB_RPC_URL);

  return web3BNB.utils.isAddress(text, 1);
};
/************************************ Genrate eth dapp signed raw ****************************************************** */

export const getDappSignedTxn = async (
  pKey,
  toAmount,
  gas_gwei_price,
  gas_estimate,
  nonce,
  toAddress,
  myAddress,
  data,
  chainId,
  rpcUrl,
) => {
  var web3BNB = new Web3(rpcUrl);

  var amountToSend = web3BNB.utils.toWei(toAmount ? toAmount : '0', 'ether');
  console.log('amountToSend', amountToSend);
  var amount = web3BNB.utils.toHex(amountToSend);
  return new Promise((resolve, reject) => {
    const rawTransaction = {
      nonce: nonce,
      gasPrice: web3BNB.utils.toHex(gas_gwei_price),
      gasLimit: web3BNB.utils.toHex(gas_estimate),
      to: toAddress,
      value: amount ? amount : '0x0',
      from: myAddress,
      data: data,
      chainId: chainId,
    };
    console.log('RAW-----', rawTransaction);
    web3BNB.eth.accounts
      .signTransaction(rawTransaction, pKey)
      .then(res => {
        console.log(
          '------------raw txn-----------',
          res.rawTransaction.slice(2),
        );
        console.log('------------raw txn-----------nonce', nonce);

        web3BNB.eth
          .sendSignedTransaction(
            `0x${res.rawTransaction.slice(2).toString('hex')}`,
          )
          .then(res => {
            console.log('------------ txn-----------', res);
            resolve(res.transactionHash);
          })
          .catch(err => {
            console.log('------------ err-----------', err);
            reject(err);
          });
      })
      .catch(error => {
        Singleton.showAlert('' + error);
        reject(error);
      });
  });
};

export const getBnbRaw = async (
  amount,
  toAddress,
  nonce,
  gasPriceTxn,
  gasLimitTxn,
  chainID,
  pvtKey,
  address,
) => {
  var web3BNB = getWeb3Object(BNB_RPC_URL);
  var amountToSend = web3BNB.utils.toWei(amount, 'ether');
  console.log(amount + 'klsdjnfklnsd  bnb' + '-----chainID', chainID);
  console.log('in send bnb');
  return new Promise((resolve, reject) => {
    try {
      console.log('RAW-----', rawTxn);
      web3BNB.eth.accounts.signTransaction(rawTxn, pvtKey).then(async res => {
        console.log('------------raw txn-----------', res.rawTransaction);

        web3BNB.eth
          .sendSignedTransaction(`${res.rawTransaction.toString('hex')}`)
          .then(txn => {
            console.log('------------txn-----------', txn);
            resolve(txn);
          })
          .catch(error => {
            console.log('------------error-----------', error);
            reject(error);
          });
      });
    } catch (error) {
      console.log('------------error-----------', error);
      reject(error);
    }
  });
};

/************************************** Generate bep-20 data encode *****************************************/

export const bnbDataEncode = async (
  tokenAdrs,
  toAdrs,
  amountSent,
  fromAddress,
) => {
  console.log('----------------------- tokenAdrs ', tokenAdrs);
  console.log('----------------------- toAdrs ', toAdrs);
  console.log('----------------------- amountSent ', amountSent);
  var web3BNB = getWeb3Object(BNB_RPC_URL);

  const estimate = await dataEncoded.estimateGas({from: fromAddress});
  const abi = await dataEncoded.encodeABI();
  return {abi, estimate};
};

// ************************************** Generate BEP-20 signed raw *****************************************

export const sendTokenBNB = async (
  dataP,
  gasPriceTxn,
  gasLimitTxn,
  chainID,
  contractAddress,
  fromAddress,
  bnbNonce,
  pvtKey,
) => {
  return new Promise((resolve, reject) => {
    var web3BNB = getWeb3Object(BNB_RPC_URL);
    const rawTransaction = {
      nonce: bnbNonce,
      gasPrice: gasPriceTxn,
      gasLimit: gasLimitTxn * 2,
      to: contractAddress,
      value: '',
      from: fromAddress,
      data: dataP,
      chainId: chainID,
    };
    console.log(dataP, '---encodeData---');
    console.log('RAW_DATA=====', rawTransaction);
    // console.log("-=-=-web3BNB==00===", typeof global.WEB3_BNB);

    web3BNB.eth.accounts.signTransaction(rawTransaction, pvtKey).then(res => {
      console.log(
        '------------raw sendTokenBNBtxn-----------',
        res.rawTransaction,
      );

      //***************************Broadcast txn */
      web3BNB.eth
        .sendSignedTransaction(res.rawTransaction.toString('hex'))
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log('err>>', err);
          // })
          reject(err);
        })
        .catch(error => {
          reject(error);
        });
    });
  });
};

// COMMON UTILES========

export const randomIndex = arrayLength => {
  let randomIndex = Math.floor(Math.random() * arrayLength);
  return randomIndex;
};

export const getTokenData = async (rpcUrl, tokenAddress) => {
  console.log('chk tokenAddresss::::::', tokenAddress);
  try {
    const contract = await getContractObject(tokenAddress, rpcUrl, TOKEN_ABI);

    const decimals = await contract.methods.decimals().call();
    const symbol = await contract.methods.symbol().call();
    const name = await contract.methods.name().call();
    console.log('chk decimal::::::', decimals);
    let data = {decimals, symbol, name};
    return data;
  } catch (error) {
    console.log('Error ==>> :', error);
    return 'invalid';
  }
};
