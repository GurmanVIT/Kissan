import {StyleSheet} from 'react-native';
import {Fonts, colors} from '../../../theme';

export default StyleSheet.create({
  mainQRView: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    alignItems: 'center',
  },
  headingH1: {
    fontSize: 22,
    fontWeight: '500',
    color: colors.black,
  },
  coinLogo: {
    height: 40,
    width: 40,
    marginTop: 20,
  },
  coinTypeView: {
    marginTop: 20,
    borderWidth: 0.5,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  coinTypeText: {
    fontSize: 9,
    color: colors.black,
  },
  walletName: {
    fontSize: 15,
    color: colors.greytext,
    fontWeight: '500',
    marginTop: 10,
  },
  scanView: {
    backgroundColor: colors.white,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border,
  },
  qrBox: {
    width: '95%',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    shadowOpacity: 0.01, // Reduced shadow opacity
    shadowRadius: 12, // Reduced shadow radius
    elevation: 2, // This is for Android shadow
    padding: 16, //
  },
  qrInnerBox: {
    height: 140,
    width: 140,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 10,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
