import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { Images, colors } from '../../theme';
import { Actions } from 'react-native-router-flux';

function Header({ title, secondaryBtn, onSecondaryBtnPress }) {
  return (
    <View style={{ marginVertical: 10, marginHorizontal: 15 }}>
      <Text
        style={[
          {
            color: colors.black,
            fontSize: 12,
            fontWeight: '500',
            lineHeight: 22,
            width: '70%',
            marginTop: 10
          },
        ]}>
        {title}
      </Text>
      {secondaryBtn ? (
        <TouchableOpacity
          onPress={onSecondaryBtnPress}
          style={{ position: 'absolute', top: 10, right: 45 }}>
          <Image source={secondaryBtn} />
        </TouchableOpacity>
      ) : null}

      <TouchableOpacity
        onPress={() => {
          Actions.pop();
        }}
        style={{ position: 'absolute', top: 10, right: 10 }}>
        <Image source={Images.backButton} />
      </TouchableOpacity>
    </View>
  );
}

function Header1({
  title,
  secondaryBtn,
  onPrimaryBtnPress,
  onSecondaryBtnPress,
}) {
  return (
    <View style={{ marginVertical: 10, marginHorizontal: 15 }}>
      <Text
        style={[
          {
            color: colors.black,
            fontSize: 12,
            fontWeight: '500',
            lineHeight: 22,
            width: '70%',
          },
        ]}>
        {title}
      </Text>
      {secondaryBtn ? (
        <TouchableOpacity
          onPress={onSecondaryBtnPress}
          style={{ position: 'absolute', top: 10, right: 45 }}>
          <Image source={secondaryBtn} />
        </TouchableOpacity>
      ) : null}

      <TouchableOpacity
        onPress={onPrimaryBtnPress}
        style={{ position: 'absolute', top: 10, right: 10 }}>
        <Image source={Images.backButton} />
      </TouchableOpacity>
    </View>
  );
}
export { Header, Header1 };
