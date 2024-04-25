import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Fonts, colors, Images} from '../../theme';
import fonts from '../../theme/fonts';
import LinearGradient from 'react-native-linear-gradient';
const ButtonPrimary = props => {
  return (
    <TouchableOpacity
      disabled={props.enable ? true : false}
      onPress={props.onPress}
      activeOpacity={1}>
      <LinearGradient
        style={[styles.filled, props.customBtnStyle]}
        colors={['#64B6F5', '#0290FE']}>
        <Text style={[styles.btnTextStyle, props.textstyle]}>
          {props.title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
const ButtonGreen = props => {
  return (
    <TouchableOpacity
      disabled={props.enable ? true : false}
      onPress={props.onPress}
      activeOpacity={1}>
      <LinearGradient
        style={[styles.filled1, props.customBtnStyle]}
        colors={['#14A300', '#14A300']}>
        <Text style={[styles.btnTextStyle, props.textstyle]}>
          {props.title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const ButtonRoundBlue = props => {
  return (
    <TouchableOpacity
      disabled={props.enable ? true : false}
      onPress={props.onPress}
      activeOpacity={1}
      style={[styles.filled2, props.customView]}>
      <Text style={[styles.btnTextStyle, props.textstyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  filled: {
    // width:'100%',
    height: 60,
    borderRadius: 5,
    elevation: 5,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },

  filled1: {
    // width:'100%',
    borderRadius: 4,
    elevation: 5,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  filled2: {
    width: '90%',
    borderRadius: 40,
    elevation: 5,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.text_blue,
    height: 45,
  },

  btnTextStyle: {
    color: colors.white,
    fontSize: 18,
    fontFamily: fonts.regular,
    fontWeight: '400',
    lineHeight: 21,
  },
});

export {ButtonPrimary, ButtonGreen, ButtonRoundBlue};
