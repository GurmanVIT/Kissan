import {StyleSheet} from 'react-native';
import {Fonts, colors} from '../../../theme';

export default StyleSheet.create({
  header: {
    fontFamily:Fonts.medium,
    fontWeight: '500',
    lineHeight: 22,
    fontSize: 17,
    color: colors.black,
  },
  subheader:{
    fontFamily:Fonts.medium,
    fontWeight: '400',
    lineHeight: 17,
    fontSize: 15,
    color: colors.grey,
  },
  bottom_txt:{
    fontFamily:Fonts.medium,
    fontWeight: '400',
    lineHeight: 16,
    fontSize: 14,
    color: colors.grey,
  },
  green_text:{
    fontFamily:Fonts.bold,
    fontWeight: '500',
    lineHeight: 17,
    fontSize: 15,
    color: colors.green,
  },
  red_bold:{
    lineHeight:18, fontWeight:'600', fontSize:15,  color: colors.red,  fontFamily:Fonts.bold,
  },
  red_medium:{
    lineHeight:18, fontWeight:'400', fontSize:15,  color: colors.red,  fontFamily:Fonts.medium,
  }
});
