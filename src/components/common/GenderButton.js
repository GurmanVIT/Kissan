import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Fonts, colors, Images} from '../../theme';
import fonts from '../../theme/fonts';

const GenderButton = ({type = 'filled', ...props}) => {
  return (
    <TouchableOpacity
      disabled={props.enable ? true : false}
      onPress={props.onPress}
      style={[styles.btnStyle[type], props.customStyle]}>
      <Text
        style={[
          styles.btnTextStyle,
          styles.btnTextStyle[type],
          props.textstyle,
        ]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    filled: {
      backgroundColor: '#FCFCFC',
      height: 46,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 30,
      marginVertical: 6,
      borderRadius: 23,
      borderColor: colors.textColorBlur,
      borderWidth: 1,
    },
    outlined: {
      height: 46,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      marginHorizontal: 30,
      borderRadius: 23,
      marginVertical: 6,
      borderColor: colors.appPrimary,
      backgroundColor: '#FCFCFC',
      borderWidth: 1,
    },
  },

  btnTextStyle: {
    
    filled: {
      color: colors.textColorBlur,
      fontFamily: fonts.regular,
      fontSize: 16,
      fontWeight: '700'
      // textShadowColor: 'rgba(0, 0, 0, 0.25)',
      // textShadowOffset: {width: 0, height: 2},
      // textShadowRadius: 2,
    },
    outlined: {
      color: colors.appPrimary,
      fontFamily: fonts.regular,
      fontSize: 16,
      fontWeight: '700'
      // textShadowColor: 'rgba(0, 0, 0, 0.25)',
      // textShadowOffset: {width: 0, height: 1},
      // textShadowRadius: 3,
      
    },
  },
});

export {GenderButton};
