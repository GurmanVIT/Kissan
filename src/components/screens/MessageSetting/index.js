import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Header, Wrap } from '../../common';
import { Images, colors } from '../../../theme';
import SwitchSelector from 'react-native-switch-selector';
import { IS_MESSAGE_PIN } from '../../../helpers/Constants';

const MessageSetting = () => {
  const [pin, setPin] = useState(false);
  const options = [{ value: false }, { value: true }];

  const onSwitchPress = async value => {
    await Singleton.getInstance().saveData(
      IS_MESSAGE_PIN,
      value ? 'enable' : 'disable',
    );
    console.log('value---', value);
  };

  return (
    <Wrap>
      <Header title={'Message'} />
      <View
        style={{
          flexDirection: 'row',
          marginTop: 8,
          alignItems: 'center',
          marginHorizontal: 15,
          paddingHorizontal: 13,
          paddingVertical: 12,
          borderColor: '#F4F4F4',
          backgroundColor: colors.white,
          borderWidth: 1,
          borderRadius: 10,
        }}>
        <Text style={{ flex: 1 }}>Receive Account Activity Notification</Text>
        <View
          style={{
            height: 30,
            width: 30,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <SwitchSelector
            backgroundColor={pin ? colors.green : colors.red}
            width={60}
            height={20}
            buttonColor={pin ? colors.white : colors.white}
            options={options}
            initial={0}
            value={pin}
            onPress={value => onSwitchPress(value)}
            hasPadding
          />
        </View>
      </View>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          marginTop: 8,
          alignItems: 'center',
          marginHorizontal: 15,
          paddingHorizontal: 13,
          paddingVertical: 12,
          borderColor: '#F4F4F4',
          backgroundColor: colors.white,
          borderWidth: 1,
          borderRadius: 10,
        }}>
        <Text style={{ flex: 1 }}>System Notification Permission</Text>
        <Image source={Images.back} />
      </TouchableOpacity>
    </Wrap>
  );
};

export default MessageSetting;

const styles = StyleSheet.create({});
