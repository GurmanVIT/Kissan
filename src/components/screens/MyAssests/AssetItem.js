import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Images, colors} from '../../../theme';
import {Actions} from 'react-native-router-flux';
import FastImage from 'react-native-fast-image';
import Singleton from '../../../helpers/Singleton';

export default function AssetItem({item}) {
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          Actions.currentScene != 'CoinDetails' &&
            Actions.CoinDetails({coinData: item});
        }}
        style={{
          backgroundColor: 'transparent',
          height: 60,
          flexDirection: 'row',
          marginTop: 10,
          marginBottom: 16,
        }}>
        {item?.image_path ? (
          <FastImage
            source={{
              uri: item?.image_path, // /'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png',
            }}
            style={{width: 35, height: 35, marginTop: 3}}
          />
        ) : (
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
            <Text>{item.symbol.charAt(0)}</Text>
          </View>
        )}
        <View style={{marginLeft: 10}}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              color: colors.black,
            }}>
            {item.symbol}
          </Text>
          <Text
            style={{
              lineHeight: 22,
              fontSize: 10,
              fontWeight: '500',
              color: colors.black,
            }}>
            USD: {Singleton.getInstance().toFixed(item.usdtPrice, 2)}
          </Text>
          <Text
            style={{
              fontSize: 10,
              fontWeight: '500',
              color: colors.black,
            }}>
            INR: {Singleton.getInstance().toFixed(item.inrPrice, 2)}
          </Text>
        </View>
        <View
          style={{
            marginLeft: 5,
            alignSelf: 'center',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{
              lineHeight: 22,
              fontSize: 12,
              fontWeight: '400',
              color: item.change > 0 ? colors.green : colors.red,
            }}>
            0
          </Text>
          <Image
            source={item.change > 0 ? Images.increase : Images.decrease}
            style={{width: 7, height: 9, marginLeft: 5}}
          />
        </View>
        <View style={{alignItems: 'flex-end', flex: 1}}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              color: colors.black,
            }}>
            {item?.balance}
          </Text>
          <Text
            style={{
              lineHeight: 22,
              fontSize: 10,
              fontWeight: '500',
              color: colors.black,
            }}>
            {Singleton.getInstance().toFixed(item?.balance_usdt, 2)}
          </Text>
          <Text
            style={{
              fontSize: 10,
              fontWeight: '500',
              color: colors.black,
            }}>
            {Singleton.getInstance().toFixed(item?.balance_inr, 2)}
          </Text>
        </View>
      </TouchableOpacity>
      <View
        style={{height: 1, width: '100%', backgroundColor: colors.border}}
      />
    </>
  );
}
