import React from 'react';
import { SafeAreaView, View, StyleSheet, ImageBackground } from 'react-native';
import { colors , Images} from '../../theme';

const Wrap = props => {
  return (
    <>
      <SafeAreaView style={[styles.wrapStyle, props.style]}>
        <ImageBackground style={styles.wrapInsideStyle} source={Images.background}>
        {props.children}
        </ImageBackground>
      </SafeAreaView>
    </>


  );
};

const styles = StyleSheet.create({
  wrapStyle: {
   // backgroundColor: colors.white,
    //flex: 1,
    position:'absolute',
    left:0,
    right:0,
    bottom:0,
    top:0

  },
  wrapInsideStyle: {
    flex: 1,
   // backgroundColor: colors.white,
  },
  wrapBottom: {
  //  backgroundColor: colors.white,
  },
});

export { Wrap };
