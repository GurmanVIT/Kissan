/* eslint-disable handle-callback-err */
import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './MneumonicsStyle';
import {Wrap} from '../../common';
import {
  generateAddressFromMnemonics,
  generateMnemonics,
  generateAddressFromMnemonics1,
  validateMnemonics,
} from '../../../helpers/utils';
import { Images } from '../../../theme';
import { Actions } from 'react-native-router-flux';


const Mneumonics = () => {

  return (
    <Wrap>
      <View style={styles.appIcon}>
          <Image  source={Images.logo} />
      </View>
    </Wrap>
  );
};

export default Mneumonics;
