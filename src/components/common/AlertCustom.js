import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Fonts, colors } from '../../theme';
import { GenderButton } from './GenderButton';
import { ButtonPrimary } from './index';

const AlertCustom = props => {
  return props.isVisible ? (
    <View style={[styles.mainView, props.mainView]}>
      <View style={styles.modalView}>

        <Text style={styles.subTitleStyle}>{props.message}</Text>

        {props.needTwoBtn == undefined ? (
          <ButtonPrimary
            type={'outlined'}
            customStyle={styles.buttonStyle}
            title={props.btnText ? props.btnText : 'Ok'}
            onPress={() => props.setModalVisiblity()}
          />
        ) : (
          <View style={styles.buttonRowStyle}>
            <GenderButton
              title={props.btnTxt}
              type={'outlined'}
              customStyle={{
                marginHorizontal: 5,
                borderRadius: 10,
                borderColor: colors.redColor,
                backgroundColor: colors.white
              }}
              textstyle={{
                color: colors.redColor,
                textShadowColor: colors.redColor,
                fontWeight: '600'
              }}
              onPress={() => {
                props.onPressBtn();
              }}
            />
            <ButtonPrimary
              title={props.btnTxt2}
              type={'outlined'}
              customStyle={{ marginHorizontal: 5, borderRadius: 10 }}
              onPress={() => {
                props.setModalVisiblity();
              }}
            />
          </View>
        )}
      </View>
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  mainView: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: 'rgba(52, 52, 52, 0.4)',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    zIndex: 100,
  },
  modalView: {
    paddingHorizontal: 10,
    backgroundColor: colors.white,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.84,
    elevation: 2,
    zIndex: 2,
    paddingVertical: 15,
    width: '100%',
  },
  titleStyle: {
    fontFamily: Fonts.regular,
    fontWeight: '700',
    fontSize: 18,
    color: colors.black,
    textAlign: 'center',
    marginTop: 10,
  },
  subTitleStyle: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: colors.modalTxt,
    textAlign: 'center',
    marginTop: 15,
    fontWeight: '400'
  },
  buttonStyle: {
    marginVertical: 15,
    marginHorizontal: 30,
    width: 150,
  },
  buttonRowStyle: {
    marginBottom: 25,
    marginTop: 25,
    paddingHorizontal: 15,
    width: '100%',
  },
});
export { AlertCustom };
