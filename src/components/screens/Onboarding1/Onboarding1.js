import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {ButtonPrimary, Wrap} from '../../common';
import {Images, colors} from '../../../theme';
import styles from './Onboarding1Style';
import {Actions} from 'react-native-router-flux';

const Onboarding1 = () => {
  return (
    <Wrap>
      <View style={{marginTop: 90, alignItems: 'center'}}>
        <Image source={Images.lock} />

        <Text
          style={[styles.header, {marginTop: 10}]}>{`Private & Secure`}</Text>

        <Text
          style={[
            styles.subheader,
            {marginTop: 10},
          ]}>{`Private keys never leave your device.`}</Text>
      </View>
      <View
        style={{
          marginHorizontal: 30,
          marginBottom: 80,
          justifyContent: 'flex-end',
          flex: 1,
        }}>
        <ButtonPrimary
          title="Create A New Wallet"
          onPress={() =>
            Actions.currentScene != 'CreateNewWallet' &&
            Actions.CreateNewWallet()
          }
        />
        <TouchableOpacity
          onPress={() => {
            Actions.currentScene != 'ImportWallet' && Actions.ImportWallet();
          }}>
          <Text
            style={[
              styles.bottom_txt,
              {marginTop: 10, alignSelf: 'center'},
            ]}>{`I already have wallet`}</Text>
        </TouchableOpacity>
      </View>
    </Wrap>
  );
};

export default Onboarding1;
