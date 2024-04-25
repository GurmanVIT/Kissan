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
  inputStyle: {
    backgroundColor:colors.transparent,
    borderRadius: 21,
    paddingHorizontal: 25,
    color: colors.black,
    fontFamily: Fonts.regular,
    fontSize: 14,
    minHeight: 171,
    paddingTop: 25,
    borderColor:colors.greytext,
    borderWidth:1,
    textAlignVertical: "top",
  },
});
