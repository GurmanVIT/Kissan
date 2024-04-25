import {StyleSheet} from 'react-native';
import {Fonts, colors} from '../../../theme';

export default StyleSheet.create({
  header: {
    fontFamily:Fonts.medium,
    fontWeight: '500',
    lineHeight: 28,
    fontSize: 24,
    color: colors.black,
  },
  subheader:{
    fontFamily:Fonts.regular,
    fontWeight: '400',
    lineHeight: 17,
    fontSize: 15,
    color: colors.grey,
  },
  bottom_txt:{
    fontFamily:Fonts.regular,
    fontWeight: '300',
    lineHeight: 25,
    fontSize: 18,
    color: colors.blue,
  }
});
