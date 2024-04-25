import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {LoaderView, SearchInput, Wrap} from '../../common';
import {MyAssetHeader} from './MyAssetHeader';
import {colors, Images} from '../../../theme';

import FastImage from 'react-native-fast-image';
import styles from './MyAssestsStyle';
import {useDispatch, useSelector} from 'react-redux';
import {
  getActiveTokenList,
  saveWalletData,
} from '../../../Redux/actions/WalletAction';
import AssetItem from './AssetItem';
import Singleton from '../../../helpers/Singleton';
import {USER_DATA} from '../../../helpers/Constants';
let ServiceList = [
  {
    name: 'Add Token',
    icon: Images.addToken,
  },
  {
    name: 'Swap',
    icon: Images.swap,
  },
  {
    name: 'Stake',
    icon: Images.calculator,
  },
  {
    name: 'News',
    icon: Images.news,
  },
];

const MyAssests = props => {
  const [searchtxt, setsearchtxt] = useState('');
  const [tabselection, settabselection] = useState('Tokens');
  const dispatch = useDispatch();
  const {loader, activeTokenList, totalbalanceUSDT, totalbalanceINR} =
    useSelector(state => state.walletReducer);
  useEffect(() => {
    props.navigation.addListener('didFocus', getWalletData);

    getWalletData();
  }, []);

  function getWalletData() {
    // dispatch(getActiveTokenList());
    Singleton.getInstance()
      .getData(USER_DATA)
      .then(async res => {
        let walletData = JSON.parse(res);
        walletData = await walletData?.multiWallet?.find(res => res?.isDefault);
        // walletData = walletData?.multiWallet[0]; // selectedWallet;
        dispatch(getActiveTokenList(walletData?.addressId));
        dispatch(saveWalletData(walletData));
      })
      .catch(err => {
        console.log(`${err}`);
      });
  }

  const Portfolio = () => {
    return (
      <View
        style={{
          height: 60,
          borderRadius: 10,
          backgroundColor: colors.white,
          borderWidth: 0.5,
          borderColor: 'rgba(0, 0, 0, 0.25)',
          paddingHorizontal: 14,
          paddingVertical: 5,
          marginTop: 10,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              lineHeight: 22,
              fontSize: 16,
              fontWeight: '700',
              color: colors.greytext,
            }}>{`My Portfolio`}</Text>
          <Image
            source={Images.eye_open}
            style={{
              width: 18,
              height: 18,
              marginLeft: 5,
              resizeMode: 'contain',
            }}
          />
          <Image
            source={Images.eye_close}
            style={{
              width: 18,
              height: 18,
              marginLeft: 5,
              resizeMode: 'contain',
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 4,
          }}>
          <Text
            style={{
              lineHeight: 22,
              fontSize: 20,
              fontWeight: '700',
              color: colors.blue,
            }}>{`USD : ${Singleton.getInstance().toFixed(
            totalbalanceUSDT,
            2,
          )}`}</Text>
          <Text
            style={{
              lineHeight: 22,
              fontSize: 20,
              fontWeight: '700',
              color: colors.green,
            }}>{`INR : ${Singleton.getInstance().toFixed(
            totalbalanceINR,
            2,
          )}`}</Text>
        </View>
      </View>
    );
  };

  const ServiceTab = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 18,
        }}>
        {ServiceList.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => {
                if (item.name == 'Add Token') {
                  Actions.currentScene != 'AddToken' && Actions.AddToken();
                }
              }}
              style={{alignItems: 'center'}}>
              <Image
                source={item.icon}
                style={{width: 30, height: 30, resizeMode: 'contain'}}
              />
              <Text
                style={{
                  lineHeight: 22,
                  fontSize: 13,
                  fontWeight: '400',
                  color: colors.black,
                }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  const renderItem = ({item}) => {
    return <AssetItem item={item} />;
  };
  return (
    <Wrap>
      <View style={{paddingHorizontal: 16, marginTop: 20}}>
        <MyAssetHeader />
        {Portfolio()}
        {ServiceTab()}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.textInput_container}>
            <SearchInput
              style={{}}
              placeholder={'Search Coins /NFTS'}
              value={searchtxt}
              onChangeText={text => {
                setsearchtxt(text);
              }}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: colors.white,
              borderColor: colors.grey,
              borderWidth: 1,
              borderRadius: 5,
              height: 30,
              width: '100%',
              marginTop: 8,
            }}>
            <TouchableOpacity
              style={{
                width: '50%',
                height: 30,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor:
                  tabselection == 'Tokens' ? colors.green : colors.transparent,
              }}
              onPress={() => {
                settabselection('Tokens');
              }}>
              <Text
                style={{
                  lineHeight: 22,
                  fontSize: 13,
                  fontWeight: '400',
                  color: tabselection == 'Tokens' ? colors.white : colors.black,
                }}>
                {'Tokens'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '50%',
                height: 30,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor:
                  tabselection == 'NFTs' ? colors.green : colors.transparent,
                borderRadius: 5,
              }}
              onPress={() => {
                settabselection('NFTs');
              }}>
              <Text
                style={{
                  lineHeight: 22,
                  fontSize: 13,
                  fontWeight: '400',
                  color: tabselection == 'NFTs' ? colors.white : colors.black,
                }}>
                {'NFTs'}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 16}}>
            <FlatList
              scrollEnabled={false}
              data={activeTokenList}
              renderItem={renderItem}
            />
            <View style={{height: 200}} />
          </View>
        </ScrollView>
      </View>
      <LoaderView isLoading={loader} />
    </Wrap>
  );
};

export default MyAssests;
