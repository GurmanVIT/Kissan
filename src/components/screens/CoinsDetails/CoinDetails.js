import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Clipboard,
  FlatList,
  Linking,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Wrap} from '../../common';
import {Fonts, Images, colors} from '../../../theme';
import styles from './style';
import {useDispatch, useSelector} from 'react-redux';
import Singleton from '../../../helpers/Singleton';
import {Actions} from 'react-native-router-flux';
import {
  getAllHistoryList,
  getWithdrawList,
  getdepositList,
} from '../../../Redux/actions';

import moment from 'moment';
let TransactionList = [
  {
    name: 'All',
  },
  {
    name: 'Send',
  },
  {
    name: 'Receive',
  },
];

const CoinDetails = props => {
  const dispatch = useDispatch();
  const {
    image_path,
    balance,
    balance_usdt,
    balance_inr,
    inrPrice,
    usdtPrice,
    slug,
    symbol,
    coin_id,
  } = props?.coinData;
  const {evmAddress, walletId} = useSelector(state => state.currentWallet);
  const {withdrawlist, depositlist} = useSelector(state => state.walletReducer);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [endReached, setEndReached] = useState(false);
  const [transactionList, setTransactionList] = useState([]);
  const [allList, setAllList] = useState([]);
  const [selectedTransaction, setselectedTransaction] = useState('All');
  // console.log('depositlist====', props?.coinData);
  // console.log('withdrawList====', withdrawlist);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    dispatch(
      getAllHistoryList({
        page: page,
        limit: '1000',
        coinId: coin_id,
        addressId: walletId,
      }),
    )
      .then(res => {
        setTransactionList([...res?.data?.depositlist]);
        setAllList([...res?.data?.depositlist]);
      })
      .catch(err => {});
  };

  const handleEndReached = () => {
    // Load more data when end is reached
    if (!loading && !endReached) {
      setPage(prevPage => prevPage + 1);
      fetchData();
    }
  };

  const Item = ({item}) => (
    <View
      style={{
        marginTop: 20,
        padding: 15,
        backgroundColor: colors.white,
        borderRadius: 10,
      }}>
      <TouchableOpacity
        onPress={() => {
          Linking.openURL('https://bscscan.com/tx/' + item?.transaction_id);
        }}
        style={{flexDirection: 'row'}}>
        <Image
          style={{width: 30, height: 30, resizeMode: 'contain'}}
          source={
            item?.transaction_type == 'deposit'
              ? Images.ic_receive
              : Images?.ic_send
          }
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flex: 1,
          }}>
          <View style={{marginLeft: 20}}>
            <Text style={{color: colors.green, fontSize: 14}}>
              {item?.transaction_type == 'deposit' ? 'Received' : 'Sent'}
            </Text>
            <Text style={{color: colors.black, fontSize: 12}}>
              {moment(item.created_at).format('Do MMMM YYYY')}
            </Text>
            <Text style={{color: colors.black, fontSize: 12}}>
              {moment(item.created_at).format('hh:mm A')}
            </Text>
          </View>
          <Text style={{color: colors.black, fontSize: 12}}>
            {item.amount}
            {' ' + symbol}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <Wrap>
      <View style={{height: '91%', marginVertical: 6, marginHorizontal: 15}}>
        <View
          style={{marginHorizontal: 8, marginTop: 10, flexDirection: 'row'}}>
          {image_path == undefined ? (
            <View
              style={{
                width: 35,
                height: 35,
                marginTop: 3,
                borderRadius: 20,
                backgroundColor: colors.borderColor,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text>{symbol.charAt(0)}</Text>
            </View>
          ) : (
            <Image
              source={{uri: image_path}}
              style={{width: 35, height: 35, marginTop: 3}}
            />
          )}
          <View style={{marginLeft: 15}}>
            <Text
              style={{
                color: colors.black,
                fontFamily: Fonts.bold,
                fontSize: 16,
              }}>
              {symbol}
            </Text>

            <Text
              style={{
                color: colors.textGrey,
                fontFamily: Fonts.medium,
                fontSize: 10,
              }}>
              = USD: {Singleton.getInstance().toFixed(usdtPrice, 2)}
            </Text>
            <Text
              style={{
                color: colors.textGrey,
                fontFamily: Fonts.medium,
                fontSize: 10,
              }}>
              = INR: {Singleton.getInstance().toFixed(inrPrice, 2)}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              Actions.pop();
            }}
            style={{position: 'absolute', top: 10, right: 10}}>
            <Image source={Images.backButton} />
          </TouchableOpacity>
        </View>

        <View style={styles.wrapInsideStyle}>
          <View style={{flexDirection: 'row'}}>
            <View style={{width: '95%'}}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: Fonts.regular,
                  color: colors.black,
                  lineHeight: 22,
                  textTransform: 'capitalize',
                }}>
                {slug}
              </Text>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 12,
                  fontFamily: Fonts.medium,
                  color: colors.black,
                  lineHeight: 22,
                }}>
                {evmAddress}
              </Text>
              {/* <Text
                numberOfLines={1}
                style={{
                  fontSize: 20,
                  fontFamily: Fonts.bold,
                  color: colors.text_blue,
                }}>
                {balance}
              </Text> */}
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 10,
                  fontFamily: Fonts.medium,
                  color: colors.text_grey,
                  lineHeight: 22,
                  marginTop: 3,
                }}>
                ≈ USD : {Singleton.getInstance().toFixed(balance_usdt, 2)}
              </Text>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 10,
                  fontFamily: Fonts.medium,
                  color: colors.text_grey,
                  lineHeight: 22,
                }}>
                ≈ INR : {Singleton.getInstance().toFixed(balance_inr, 2)}
              </Text>
            </View>
            <TouchableOpacity
              onPress={async () => {
                Clipboard.setString(evmAddress);
                Singleton.getInstance().showMsg('Address copied.');
              }}
              style={{marginTop: 10}}>
              <Image source={Images.copyButton} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: 1,
              width: '100%',
              backgroundColor: colors.borderColor,
            }}
          />

          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <Text
                style={{
                  fontSize: 12,
                  color: colors.text_grey,
                  lineHeight: 22,
                }}>
                Available Balance
              </Text>

              <Text
                style={{
                  fontSize: 14,
                  color: colors.black,
                  lineHeight: 22,
                }}>
                {balance}
              </Text>
            </View>
            <View style={{flex: 1}}>
              <Text
                style={{
                  fontSize: 12,
                  color: colors.text_grey,
                  lineHeight: 22,
                }}>
                Staked Amount
              </Text>

              <Text
                style={{
                  fontSize: 14,
                  color: colors.black,
                  lineHeight: 22,
                }}>
                0.00
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            marginTop: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPress={() => {
              Actions.currentScene != 'SelectRecipient' &&
                Actions.SelectRecipient({coinData: props.coinData});
            }}>
            <Image source={Images.ic_send} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Actions.currentScene != 'ReceiveScreen' &&
                Actions.ReceiveScreen({coinData: props.coinData});
            }}>
            <Image source={Images.ic_receive} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={Images.ic_scan} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={Images.ic_swap} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={Images.ic_stake} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 15,
          }}>
          <View
            style={{
              width: '32%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: colors.black,
                textAlign: 'center',
                fontFamily: Fonts.regular,
                fontWeight: '500',
                fontSize: 16,
              }}>
              Transactions
            </Text>
            <Image source={Images.ic_reload_tran} />
          </View>
          <View
            style={{
              width: '20%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Image source={Images.ic_line_chart} />
            <Image source={Images.ic_transaction_swap} />
            <Image source={Images.ic_info} />
          </View>
        </View>

        <FlatList
          data={transactionList}
          renderItem={({item}) => Item({item})}
          keyExtractor={item => item.id.toString()}
          // onEndReached={handleEndReached}
          // onEndReachedThreshold={0.1}
          ListEmptyComponent={
            <View style={{alignItems: 'center', marginTop: 50}}>
              <Image source={Images.ic_no_transaction} />
              <Text
                style={{
                  color: colors.black,
                  textAlign: 'center',
                  fontFamily: Fonts.regular,
                  fontWeight: '500',
                  fontSize: 15,
                }}>
                No Transactions found. Please try to sync the transitions
              </Text>
            </View>
          }
        />
      </View>
      <View
        style={{
          height: 40,
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginVertical: 10,
          marginHorizontal: 15,
          backgroundColor: colors.white,
          alignItems: 'center',
          borderRadius: 25,
        }}>
        {TransactionList.map((item, index) => {
          return (
            <TouchableOpacity
              style={{padding: 10}}
              onPress={() => {
                let arr = allList;
                if (item?.name == 'Send') {
                  arr = allList?.filter(
                    res => res?.transaction_type == 'withdraw',
                  );
                } else if (item?.name == 'Receive') {
                  arr = allList?.filter(
                    res => res?.transaction_type == 'deposit',
                  );
                }
                console.log('arr===', arr);
                setTransactionList(arr);
                setselectedTransaction(item.name);
              }}>
              <Text
                style={{
                  color:
                    item.name == selectedTransaction
                      ? colors.green
                      : colors.black,
                  fontSize: 11,
                }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </Wrap>
  );
};

export {CoinDetails};
