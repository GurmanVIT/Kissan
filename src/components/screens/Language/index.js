import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Header, Wrap} from '../../common';
import Flag from '../../../assets/svg/flag';
import {CheckBox} from 'native-base';
import {Images, colors} from '../../../theme';

const LanguagePage = () => {
  const DATA = [
    {
      name: 'USD',
    },
    {
      name: 'USD',
    },
  ];
  return (
    <Wrap>
      <Header title={'Language'} />
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
        <Flag />
        <Text style={{marginHorizontal: 8, flex: 1}}>English USA</Text>
        <Image source={Images.back} />
      </TouchableOpacity>
      <Text style={{marginHorizontal: 16, marginTop: 16, color: colors.black}}>
        Choose From List
      </Text>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
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
            <Flag />
            <Text style={{marginHorizontal: 8, flex: 1}}>English USA</Text>
            <CheckBox value={true} style={styles.checkbox} />
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </Wrap>
  );
};

export default LanguagePage;

const styles = StyleSheet.create({});
