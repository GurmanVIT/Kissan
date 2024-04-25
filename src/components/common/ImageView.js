import React from 'react';
import {
  TouchableOpacity,
  Text,
  Image,
  View,
  StyleSheet,
  Platform
} from 'react-native';
import FastImage from 'react-native-fast-image';
import { Actions } from 'react-native-router-flux';
import { colors } from '../../theme';
import Singleton from '../../helpers/Singleton';

function ImageView({ item, addItem, removeItem, ...props }) {
  return (
    <View style={styles.mainPicView}>
      {item?.uri == '' ? (
        <View style={styles.pictureBg} />
      ) : (
        <TouchableOpacity
          onPress={() => {
            props?.imageClick && props?.imageClick()
            Singleton.getInstance()?.showImageViewRef?.showImage(item.uri)
            // Actions.currentScene != "ImagePreview" && Actions.ImagePreview({ uri: item.uri })
          }}
          activeOpacity={0.8} style={styles.picture}>
          <FastImage style={styles.picture1} source={item.uri} />
        </TouchableOpacity>
      )}

      {props.avoidBtn ? <View /> : <TouchableOpacity
        onPress={() => {
          if (item.uri == '') {
            // setSelected(item.id);
            addItem(item.id)
          } else {
            removeItem(item.id)
          }
        }}
        style={[
          styles.customPlusPic,
          {
            backgroundColor:
              item.uri == '' ? colors.appPrimary : colors.redColor,
          },
        ]}>
        <Text style={styles.plusTxt}>{item.uri == '' ? '+' : '-'}</Text>
      </TouchableOpacity>}
    </View>
  );
}
const styles = StyleSheet.create({
  mainPicView: {
    flex: 1 / 3,
    height: 180,
  },
  pictureBg: {
    backgroundColor: colors.blankImgBg,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 12,
    height: '90%',
    flex: 1,
  },
  picture: {
    marginHorizontal: 10,
    marginVertical: 5,

    height: '90%',
    flex: 1,
  },
  picture1: {
    borderRadius: 12,
    height: '90%',
    flex: 1,
  },
  customPlusPic: {
    position: 'absolute',
    backgroundColor: colors.appPrimary,
    width: 25,
    height: 25,
    right: 5,
    top: 2,
    borderRadius: 20,
    alignItems: 'center',
  },
  plusTxt: {
    position: 'absolute',
    fontSize: 18,
    color: colors.white,
    bottom: Platform.OS == 'ios' ? 3 : 1,
  },
})
export { ImageView }