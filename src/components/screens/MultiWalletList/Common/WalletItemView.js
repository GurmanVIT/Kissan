import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Images, colors} from '../../../../theme';
import {randomIndex} from '../../../../helpers/utils';

const WalletItemView = ({item, onPress}) => {
  return (
    <View>
      <View
        style={{
          paddingVertical: 20,
          backgroundColor: colors.walletItemClrArr[randomIndex(2)],
          borderRadius: 15,
          marginTop: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
          }}>
          <TouchableOpacity
            onPress={onPress}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              resizeMode="contain"
              source={item?.isDefault ? Images.ic_tick : Images.ic_untick}
            />
            <Text
              style={{
                marginLeft: 10,
                fontWeight: '500',
                color: colors.black,
                fontSize: 12,
              }}>
              {item?.walletName}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            {/* <Image source={Images.ic_more_option} /> */}
          </TouchableOpacity>
        </View>

        <View
          style={{
            height: 0.5,
            backgroundColor: colors.greyDark,
            width: '100%',
            marginTop: 10,
          }}
        />
        <View
          style={{
            paddingHorizontal: 15,
            marginTop: 10,
          }}>
          <Text
            style={{
              fontWeight: '500',
              color: colors.black,
              fontSize: 12,
            }}>
            Available Balance
          </Text>
          <Text
            style={{
              fontWeight: '500',
              color: colors.black,
              fontSize: 10,
              marginTop: 5,
            }}>
            INR : 0.00
          </Text>
          <Text
            style={{
              fontWeight: '500',
              color: colors.black,
              fontSize: 10,
              marginTop: 5,
            }}>
            INR : 0.00
          </Text>
        </View>
      </View>
    </View>
  );
};

export default WalletItemView;
