import {View, Text} from 'react-native';
import React from 'react';
import {colors} from '../../theme';

function CoinSymbol({coinName = 'BNB'}) {
  return (
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
      <Text>{coinName.charAt(0)}</Text>
    </View>
  );
}
export {CoinSymbol};
