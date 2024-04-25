import {
  View,
  Text,
  ScrollView,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  ButtonGreen,
  ButtonPrimary,
  CoinSymbol,
  Header,
  Wrap,
} from '../../common';
import styles from './styles';
import {Images, colors} from '../../../theme';
import QRCode from 'react-native-qrcode-svg';
import {useSelector} from 'react-redux';
import Singleton from '../../../helpers/Singleton';
import Share from 'react-native-share';

const ReceiveScreen = props => {
  const {evmAddress, walletData, walletId} = useSelector(
    state => state.currentWallet,
  );
  console.log('walletData==', props?.coinData?.image_path);
  return (
    <Wrap>
      <Header title={'Receive'} />
      <ScrollView keyboardShouldPersistTaps={'always'}>
        <View style={styles.mainQRView}>
          <Text style={styles.headingH1}>
            Receive {props?.coinData?.symbol}
          </Text>
          {props?.coinData?.image_path ? (
            <Image
              style={styles.coinLogo}
              source={{uri: props?.coinData?.image_path}}
            />
          ) : (
            <CoinSymbol coinName={props?.coinData?.symbol} />
          )}

          <View style={styles.coinTypeView}>
            <Text style={styles.coinTypeText}>BEP20</Text>
          </View>
          <View style={styles.qrBox}>
            <Image
              style={{marginTop: 10}}
              resizeMode="contain"
              source={Images.ic_scan_qr}
            />

            <View style={styles.qrInnerBox}>
              <QRCode size={110} value={evmAddress} />
            </View>
            <Text style={styles.walletName}>{walletData?.walletName}</Text>

            <View
              style={{
                width: '100%',
                height: 40,
                marginTop: 10,
                borderColor: colors.border,
                borderWidth: 1,
                borderRadius: 5,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
                justifyContent: 'space-between',
              }}>
              <Text
                numberOfLines={1}
                style={{width: '85%', fontSize: 12, color: colors.black}}>
                {evmAddress}
              </Text>
              <TouchableOpacity
                style={[
                  styles.coinTypeView,
                  {
                    backgroundColor: colors.green,
                    marginTop: 0,
                    borderWidth: 0,
                  },
                ]}>
                <Text style={{color: colors.white, fontSize: 10}}>Copy</Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <TouchableOpacity
                onPress={() => {
                  Singleton.getInstance().showMsg(
                    props?.coinData?.symbol + ' Address saved',
                  );
                }}
                style={[
                  styles.coinTypeView,
                  {
                    backgroundColor: colors.green,
                    marginTop: 0,
                    borderWidth: 0,
                    flex: 1,
                    borderRadius: 5,
                    alignItems: 'center',
                    height: 25,
                  },
                ]}>
                <Text style={{color: colors.white, fontSize: 12}}>
                  Save QR Code
                </Text>
              </TouchableOpacity>
              <View style={{width: 15}} />
              <TouchableOpacity
                onPress={() => {
                  Share.open({
                    message: `Please share ${props?.coinData?.symbol} on this ${evmAddress} address.`,
                  })
                    .then(res => {
                      console.log(res);
                    })
                    .catch(err => {
                      err && console.log(err);
                    });
                }}
                style={[
                  styles.coinTypeView,
                  {
                    backgroundColor: colors.appPrimary,
                    marginTop: 0,
                    borderWidth: 0,
                    flex: 1,
                    borderRadius: 5,
                    alignItems: 'center',
                    height: 25,
                  },
                ]}>
                <Text style={{color: colors.white, fontSize: 12}}>
                  Share QR Code
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={{marginTop: 65, fontSize: 14, color: colors.black}}>
            Send only
            <Text style={{fontWeight: '600'}}>
              {' '}
              {props?.coinData?.symbol} (BEP 20){' '}
            </Text>
            coins to this address Sending any other coins may result in
            permanent loss.
          </Text>
          <View style={{height: 50}} />
        </View>
      </ScrollView>
    </Wrap>
  );
};

export {ReceiveScreen};
