import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {Header, Wrap} from '../../common';
import {Images, colors} from '../../../theme';
import Flag from '../../../assets/svg/flag';
import {CheckBox} from 'native-base';

const CurrencyUnit = () => {
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
      <Header title={'Currency'} />
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
        <Text style={{marginHorizontal: 8, flex: 1}}>
          United State Doller - USD
        </Text>
        <Image source={Images.back} />
      </TouchableOpacity>
      <Text style={{marginHorizontal: 16, marginTop: 16, color: colors.black}}>
        Choose Secondry Currency
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
            <Text style={{marginHorizontal: 8, flex: 1}}>
              United State Doller - USD
            </Text>
            <CheckBox value={true} style={styles.checkbox} />
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </Wrap>
  );
};

export default CurrencyUnit;

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
    marginHorizontal: 10,
  },
  label: {
    margin: 8,
  },
});
