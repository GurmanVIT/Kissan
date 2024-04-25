/* eslint-disable handle-callback-err */
import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './SplashStyle';
import {Wrap} from '../../common';

import {Images} from '../../../theme';
import {Actions} from 'react-native-router-flux';
import Singleton from '../../../helpers/Singleton';
import {
  IS_BIOMETRIC_ENABLED,
  IS_LOGIN_PIN,
  USER_DATA,
} from '../../../helpers/Constants';

const Splash = () => {
  useEffect(() => {
    global.isCamera = false;
    // generateMnemonics();
    setTimeout(() => {
      Singleton.getInstance()
        .getData(USER_DATA)
        .then(async res => {
          if (res == null) {
            Actions.reset('Onboarding1');
          } else {
            let isPinEnable = await Singleton.getInstance().getData(
              IS_LOGIN_PIN,
            );
            if (isPinEnable == 'disable') {
              Actions.reset('Main');
            } else {
              Actions.reset('LoginPin', {
                callback: () => {
                  Actions.reset('Main');
                },
              });
            }
            //
          }
        });
    }, 2500);
  }, []);
  return (
    <Wrap>
      <View style={styles.appIcon}>
        <Image source={Images.logo} />
      </View>
    </Wrap>
  );
};

export default Splash;
