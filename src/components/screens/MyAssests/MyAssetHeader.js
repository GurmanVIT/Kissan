import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image, View } from 'react-native';
import { colors, Images } from '../../../theme';
import { useSelector } from 'react-redux';
import { Actions } from 'react-native-router-flux';

const MyAssetHeader = props => {

  const { walletName } = useSelector(state => state?.currentWallet);
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text
            style={{
              lineHeight: 22,
              fontSize: 12,
              fontWeight: '700',
              color: colors.greytext,
            }}>
            {`Wallet Name `}
            <Text
              style={{
                lineHeight: 22,
                fontSize: 12,
                fontWeight: '400',
                color: colors.greytext,
              }}>
              {`( ${walletName} )`}
            </Text>
          </Text>
          <Image
            source={Images.conversion}
            style={{ width: 16, height: 16, marginLeft: 5 }}
          />
        </View>
        <Text
          style={{
            lineHeight: 22,
            fontSize: 12,
            fontWeight: '400',
            color: colors.greytext,
          }}>{`Main Net`}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          onPress={() => {
            Actions.currentScene != 'MultiWalletList' &&
              Actions.MultiWalletList();
          }}>
          <Image
            source={Images.wallet_add}
            style={{ width: 20, height: 20, marginRight: 12 }}
          />
        </TouchableOpacity>

        <Image source={Images.notification} style={{ width: 14, height: 17 }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export { MyAssetHeader };
