import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Header, Wrap } from '../../common';
import { Images } from '../../../theme';
import { Actions } from 'react-native-router-flux';

const CreateMultiWallet = () => {
  return (
    <Wrap>
      <Header title={'Create Wallet'} />
      <ScrollView
        style={{ marginHorizontal: 15 }}
        keyboardShouldPersistTaps={'always'}>
        <Image resizeMode="contain" source={Images.welcome_text} />
        <Image
          style={{ marginLeft: 15, marginTop: 5 }}
          resizeMode="contain"
          source={Images.kissan_text}
        />
        <TouchableOpacity
          onPress={() => {
            Actions.currentScene != 'ImportWallet' &&
              Actions.ImportWallet({
                isMultiWallet: true,
                isImport: false,
              });
          }}
          style={{
            marginTop: 25,
            alignItems: 'center',
            height: 90,
            width: '100%',
          }}>
          <Image
            resizeMode="cover"
            style={{ height: '100%', width: '100%' }}
            source={Images.create_wallet_btn}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            Actions.currentScene != 'ImportWallet' &&
              Actions.ImportWallet({
                isMultiWallet: true,
                isImport: true,
              });
          }}
          style={{
            alignItems: 'center',
            height: 90,
            width: '100%',
            marginTop: 20,
          }}>
          <Image
            resizeMode="cover"
            style={{ height: '100%', width: '100%' }}
            source={Images.import_wallet_btn}
          />
        </TouchableOpacity>
      </ScrollView>
    </Wrap>
  );
};

export { CreateMultiWallet };
