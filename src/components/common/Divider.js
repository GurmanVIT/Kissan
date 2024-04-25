import {View, Text} from 'react-native';
import React from 'react';
import {colors} from '../../theme';

function Divider() {
  return (
    <View
      style={{
        height: 1,
        width: '100%',
        backgroundColor: colors.border,
        marginBottom: 15,
        marginTop: 10,
      }}
    />
  );
}
export {Divider};
