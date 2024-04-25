import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Header, Wrap } from '../../common';
import { Images, colors } from '../../../theme';
import { Actions } from 'react-native-router-flux';
import WalletItemView from './Common/WalletItemView';
import Singleton from '../../../helpers/Singleton';
import { USER_DATA } from '../../../helpers/Constants';

const MultiWalletList = () => {
  let userData = null;
  const [walletList, setWalletList] = useState([]);
  useEffect(() => {
    Singleton.getInstance()
      .getData(USER_DATA)
      .then(async res => {
        let walletData = JSON.parse(res);
        userData = walletData;
        setWalletList([...walletData?.multiWallet]);
      })
      .catch(er => {
        console.log('ERRp==', er);
      });
  }, []);
  console.log('walletData111===', walletList);

  return (
    <Wrap>
      <Header
        title={''}
        secondaryBtn={Images.wallet_add}
        onSecondaryBtnPress={() => {
          Actions.currentScene != 'CreateMultiWallet' &&
            Actions.CreateMultiWallet();
        }}
      />
      <ScrollView
        style={{ marginHorizontal: 15 }}
        keyboardShouldPersistTaps={'always'}>
        <Image
          style={{ marginBottom: 10 }}
          resizeMode="contain"
          source={Images.hot_wallet_text}
        />

        {walletList.map((res, index) => {
          return (
            <WalletItemView
              item={res}
              onPress={async () => {
                let newList = walletList.map((newRes, newIndex) => {
                  return { ...newRes, isDefault: index == newIndex };
                });
                await Singleton.getInstance().saveData(
                  USER_DATA,
                  JSON.stringify({ ...userData, multiWallet: newList }),
                );
                setWalletList([...newList]);
              }}
            />
          );
        })}
        <View style={{ height: 10 }} />
      </ScrollView>
    </Wrap>
  );
};

export { MultiWalletList };
