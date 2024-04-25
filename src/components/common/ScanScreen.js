import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  Modal,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {View} from 'native-base';
import {colors} from '../../theme';
import {Header, Header1} from './Header';

const ScanScreen = ({isShow, onSuccessRead, onClosePress}) => {
  const onSuccess = e => {
    onSuccessRead(e.data);
  };

  return (
    <Modal onRequestClose={onClosePress} visible={isShow}>
      <View style={{backgroundColor: colors.black, flex: 1}}>
        <Header1 title={'Scan Address'} onPrimaryBtnPress={onClosePress} />
        <QRCodeScanner
          onRead={onSuccess}
          // markerStyle={{borderColor: 'red', borderWidth: 1}}s
        />
      </View>
    </Modal>
  );
};
export {ScanScreen};

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
