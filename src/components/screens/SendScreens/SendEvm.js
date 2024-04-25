import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {ButtonGreen, Header, LoaderView, Wrap} from '../../common';
import {Fonts, Images, colors} from '../../../theme';
import Singleton from '../../../helpers/Singleton';
import {USER_DATA} from '../../../helpers/Constants';
import {useEffect} from 'react';
import {useState} from 'react';
import {
  bnbDataEncode,
  generateAddressFromMnemonics,
  getBnbRaw,
  getCoinBalance,
  getGasPrice,
  getNonceValueDapp,
  getTokenBalance,
  sendTokenBNB,
} from '../../../helpers/utils';
import {BNB_RPC_URL, BNB_CHAIN_ID} from '../../../Network/Endpoints';
import styles from './styles';
import {SendConfirm} from './SendConfirm';
import {useDispatch, useSelector} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {saveWithdrawReq} from '../../../Redux/actions';

function SendEvm(props) {
  let gasEstimation = 21000;
  const [decimal, setDecimal] = useState(18);
  const [userbal, setUserBal] = useState('0');
  const [coinBal, setCoinBal] = useState(0);
  const [amount, setAmount] = useState('');
  const [amountUSD, setAmountUSD] = useState('');
  const [isCryptoSelected, setSelectedItem] = useState(true);
  const [confirmationData, setConfirmationData] = useState({
    isOpen: false,
    fees: '0',
  });
  const {evmAddress, walletData, walletId} = useSelector(
    state => state.currentWallet,
  );
  const [loader, setLoder] = useState(true);
  const {symbol} = props?.coinData;
  const dispatch = useDispatch();

  const contract_address = props?.coinData?.token_address || '';
  useEffect(() => {
    getUserBal();
  }, []);

  const getUserBal = async () => {
    try {
      let balance = 0;
      let decimal = 18;
      let coinBalance = await getCoinBalance(BNB_RPC_URL, evmAddress);

      if (contract_address != '') {
        let data = await getTokenBalance(
          BNB_RPC_URL,
          contract_address,
          evmAddress,
        );
        decimal = data?.decimals || 0;
        balance = data?.balance || 0;
        setDecimal(decimal);
      } else {
        balance = coinBalance;
      }
      setCoinBal(coinBalance / 10 ** 18);
      setUserBal(balance / 10 ** decimal);
      setLoder(false);
    } catch (error) {
      console.log('getUserBal ERROR---', error);
    }
  };

  function ammountInFait(amount) {
    const price = props.coinData?.usdtPrice || 1;
    let amt = amount * price;
    amt = Singleton.getInstance().toFixed(amt, 3);
    return amt;
  }

  async function saveTransaction(transactionHash) {
    dispatch(
      saveWithdrawReq({
        addressId: walletId,
        amount: amount,
        coinId: props?.coinData?.coin_id,
        toAddress: props?.receiveAddress,
        txHash: transactionHash,
      }),
    )
      .then(res => {
        Singleton.getInstance().showMsg(
          'Transaction has been pushed on blockchain.',
        );
        Actions.pop();
        Actions.pop();
      })
      .catch(err => {
        Singleton.getInstance().showMsg(
          'Transaction has been pushed on blockchain.',
        );
        Actions.pop();
        Actions.pop();
      });
  }
  async function onSendFuntion() {
    try {
      setLoder(true);

      console.log('walletData===', walletData);
      let nonce = await getNonceValueDapp(BNB_RPC_URL, evmAddress);

      let pvtKey = await generateAddressFromMnemonics(walletData?.mnemonics);
      let gasPrice = await getGasPrice(BNB_RPC_URL);

      pvtKey = pvtKey?.privateKey;

      if (contract_address == '') {
        gasPrice = gasPrice / 10 ** 9;
        getBnbRaw(
          amount,
          props?.receiveAddress,
          nonce,
          gasPrice,
          gasEstimation,
          BNB_CHAIN_ID,
          pvtKey,
          evmAddress,
        )
          .then(res => {
            console.log('RESPONSE+====', res);

            saveTransaction(res?.transactionHash);
          })
          .catch(err => {
            console.log('err+====', err);
            Singleton.getInstance().showError(`${err}`);
            setLoder(false);
          });
      } else {
        const amountToSend = amount * 10 ** decimal;
        console.log(' amoun----', amountToSend, amount, decimal);
        let {abi, estimate} = await bnbDataEncode(
          contract_address,
          props?.receiveAddress,
          amount,
          evmAddress,
        );
        console.log('DATA----', estimate);
        sendTokenBNB(
          abi,
          gasPrice,
          estimate,
          BNB_CHAIN_ID,
          contract_address,
          evmAddress,
          nonce,
          pvtKey,
        )
          .then(res => {
            console.log('RESPONSE+====', res);
            saveTransaction(res?.transactionHash);
          })
          .catch(err => {
            console.log('err+====', err);
            Singleton.getInstance().showError(`${err}`);
            setLoder(false);
          });
      }
    } catch (error) {
      console.log('error+====', error);
    }
  }

  return (
    <Wrap>
      <Header title={'Send'} />
      <ScrollView keyboardShouldPersistTaps={'always'}>
        <View
          style={{
            marginVertical: 10,
            marginHorizontal: 15,
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: Fonts.regular,
              fontWeight: '500',
              color: colors.black,
              fontSize: 22,
            }}>
            Send {props.coinData?.symbol}
          </Text>
          <Image
            style={{height: 60, width: 60, marginTop: 15}}
            source={{uri: props.coinData?.image_path}}
          />
          <Text style={styles.amountText}>Enter Amount</Text>
          <TextInput
            onChangeText={text => {
              const expression = new RegExp('^\\d*\\.?\\d{0,9}$');
              if (expression.test(text)) {
                if (isCryptoSelected) {
                  setAmount(text);
                  setAmountUSD(`${ammountInFait(text)}`);
                } else {
                  setAmountUSD(text);
                  let cryptoAmount =
                    parseFloat(text) / props.coinData?.usdtPrice;
                  console.log('cryptoAmount----', cryptoAmount);
                  setAmount(
                    `${Singleton.getInstance().toFixed(cryptoAmount, 6)}`,
                  );
                }
              }
            }}
            value={isCryptoSelected ? amount : amountUSD}
            keyboardType="decimal-pad"
            placeholder="0.001"
            style={styles.amountInputText}
          />
          {isCryptoSelected ? (
            <Text style={styles.balanceText}>
              {Singleton.getInstance().currencySymbol} {ammountInFait(amount)}
            </Text>
          ) : (
            <Text style={styles.balanceText}>
              {amount + ' ' + props.coinData?.symbol}
            </Text>
          )}
          <Text style={[styles.amountText, {marginTop: 27}]}>
            Available Balance
          </Text>

          <Text style={styles.balanceText}>
            <Text style={{color: colors.blue}}>
              {props.coinData?.symbol + ' '}
            </Text>

            {Singleton.getInstance().toFixed(userbal, 6)}
            <Text style={{color: colors.green}}>
              {' '}
              / {Singleton.getInstance().currencySymbol}{' '}
            </Text>
            {ammountInFait(userbal)}
          </Text>

          <View style={styles.tabStyle}>
            <TouchableOpacity
              onPress={() => {
                setSelectedItem(true);
              }}
              style={[
                styles.tabItem,
                {
                  backgroundColor: isCryptoSelected ? colors.text_blue : null,
                },
              ]}>
              <Image
                style={{height: 20, width: 20}}
                source={{uri: props.coinData?.image_path}}
              />
              <Text> {props.coinData?.symbol}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (props.coinData?.usdtPrice) {
                  setSelectedItem(false);
                } else {
                  Singleton.getInstance().showError(
                    'Market price is not available.',
                  );
                }
              }}
              style={[
                styles.tabItem,
                {
                  backgroundColor: !isCryptoSelected ? colors.text_blue : null,
                },
              ]}>
              <Text
                style={{
                  backgroundColor: '#6D6D6C',
                  borderRadius: 6,
                  paddingHorizontal: 5,
                  color: colors.white,
                }}>
                {Singleton.getInstance().currencySymbol}
              </Text>
              <Text>{props.coinData?.SYMBO || ' USD '}</Text>
            </TouchableOpacity>
          </View>

          <View style={{width: '100%', marginTop: 35}}>
            <Text style={styles.noteText}>
              Note <Text style={{color: colors.balance_clr}}> (Optional)</Text>
            </Text>
            <TextInput
              placeholder="Please enter notes, no more then 200 letters"
              style={styles.noteTextView}
            />
          </View>

          <ButtonGreen
            customBtnStyle={{marginTop: 30}}
            onPress={async () => {
              let gasPrice = await getGasPrice(BNB_RPC_URL);
              let fees = (gasPrice * gasEstimation) / 10 ** 18;
              let amountToSend = parseFloat(amount);
              if (contract_address == '') {
                amountToSend = parseFloat(amount) + parseFloat(fees);
              }
              console.log('d======', amountToSend, userbal);

              // FOR COIN
              if (isNaN(amountToSend)) {
                return Singleton.getInstance().showError(
                  'Please enter valid amount',
                );
              } else if (amountToSend <= parseFloat(userbal)) {
                if (contract_address != 'coin') {
                  console.log('coinBal======', coinBal, 'fees=====', fees);
                  if (parseFloat(coinBal) >= parseFloat(fees)) {
                    setConfirmationData({isOpen: true, fees: fees + ' BNB'});
                  } else {
                    Singleton.getInstance().showError(
                      'Insufficient fund for transaction fees.',
                    );
                  }
                } else {
                  setConfirmationData({isOpen: true, fees: fees + ' BNB'});
                }
              } else {
                Singleton.getInstance().showError('Insufficient ' + symbol);
              }
            }}
            title={'Send'}
          />
        </View>
      </ScrollView>
      <SendConfirm
        isConfirmation={confirmationData.isOpen}
        onClose={() => {
          setConfirmationData({isOpen: false});
        }}
        onConfirm={() => {
          setConfirmationData({isOpen: false});
          onSendFuntion();
        }}
        fromAddress={evmAddress}
        toAddress={props?.receiveAddress}
        amount={amount}
        confirmationData={confirmationData}
        coinData={props?.coinData}
      />
      <LoaderView isLoading={loader} />
    </Wrap>
  );
}
export {SendEvm};
