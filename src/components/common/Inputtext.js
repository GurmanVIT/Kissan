import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Fonts, colors, Images} from '../../theme';

const Inputtext = props => {
  return (
    <View style={[styles.inputWrapStyle, props.style]}>
      {props.label ? (
        <Text
          style={[
            styles.labelTextStyle,
            props.labelStyle,
            {color: colors.black},
          ]}>
          {props.label}
        </Text>
      ) : null}
      <TextInput
        style={[styles.inputStyle, props.inputStyle]}
        placeholder={props.placeholder}
        onChangeText={props.onChangeNumber}
        placeholderTextColor={colors.grey}
        value={props.value}
        keyboardType={props.keyboardType}
        onBlur={props.onBlur}
        maxLength={props.maxLength}
        editable={props.editable}
        onEndEditing={props.onEndEditing}
        defaultValue={props.defaultValue}
        onSubmitEditing={props.onSubmitEditing}
        returnKeyType={props.returnKeyType}
        enablesReturnKeyAutomatically={true}
      />
      <View style={props.rightStyle}>{props.children}</View>
      <Text onPress={props.onInstructionPress} style={styles.bottomInstruction}>
        {props.bottomInstruction}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapStyle: {
    // paddingHorizontal: 20,
    // marginBottom: 20,
    // position: "relative",
  },
  labelTextStyle: {
    fontFamily: Fonts.bold,
    fontSize: 14,
    color: colors.black,
    marginBottom: 10,
  },
  inputStyle: {
    height: 40,
    backgroundColor: colors.white,
    borderColor: colors.grey,
    borderWidth: 1,
    paddingHorizontal: 10,
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: colors.black,
  },
  bottomInstruction: {
    color: colors.grey,
    fontFamily: Fonts.bold,
    fontSize: 13,
    marginTop: 10,
    textAlign: 'right',
  },
});

export {Inputtext};
