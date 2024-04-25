import React, {useState, useEffect, useCallback} from 'react';
import {Image, StyleSheet} from 'react-native';
import {Fonts, colors, Images} from '../../theme';
import {Inputtext} from './Inputtext';
import FastImage from 'react-native-fast-image';
const SearchInput = props => {
  return (
    <Inputtext
      style={props.style}
      placeholder={props.placeholder}
      inputStyle={props.inputStyle}
      value={props.value}
      returnKeyType="search"
      onSubmitEditing={props.onSubmitEditing}
      onChangeNumber={props.onChangeText}>
      <FastImage
        style={styles.searchIconStyle}
        resizeMode={'contain'}
        source={Images.icon_search}
      />
    </Inputtext>
  );
};

const styles = StyleSheet.create({
  searchIconStyle: {
    height: 20,
    width: 20,
    position: 'absolute',
    top: -30,
    right: 20,
  },
});

export {SearchInput};
