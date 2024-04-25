/*
 *   Copyright (c) 2023 Antier Solutions Pvt. Ltd (408)
 *   All rights reserved.
 */
import {StyleSheet, Platform} from 'react-native';
import {Images, colors, Fonts} from '../../../theme';


export default StyleSheet.create({
    walletStyle:{
        marginTop:20,
        color:'#363636',
        fontFamily: Fonts.regular,
        fontSize: 12,
        marginHorizontal: 15,
    },
  itemContainer: {
    flexDirection: 'row',
    marginTop: 8,
    height:43,
    alignItems: 'center',
    marginHorizontal: 15,
    paddingHorizontal:13,
    paddingVertical:12,
    borderColor:'#F4F4F4',
    backgroundColor:colors.white,
    borderWidth:1,
    borderRadius:10,
  },
  itemContainer1: {
    marginLeft: 8,
    width: '70%',
  },
  headerText: {
    color:colors.black,
    fontFamily: Fonts.regular,
    fontSize: 14,
  },
  headerText1: {
    fontFamily: Fonts.semibold,
    fontSize: 15,
    lineHeight: 19,
    textTransform: 'capitalize',
  },
  headerText1: {
    fontFamily: Fonts.semibold,
    fontSize: 16,
    lineHeight: 20,
    marginHorizontal: 15,
    marginTop: 14,
  },
  titleText: {
    // fontWeight: '600',
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: colors.greyText,
    lineHeight: 24,
  },
  lineView: {
    // height: 0.8,
    height: 0.5,
    width: '91%',
    backgroundColor: colors.Black,
    marginTop: 15,
    opacity: 0.1,
    // marginRight: '5%',
  },
  imageView: {
    width: '15%',
    height: '100%',
  },
  mailViewStyle1: {
    marginTop: 10,
  },
  mailViewStyle: {
    marginTop: 14,
  },
  appearanceMode: {
    position: 'absolute',
    right: 0,
    fontFamily: Fonts.regular,
    fontSize: 12,
    // color: colors.icon_grey,
  },
  accountName: {
    fontFamily: Fonts.regular,
    // fontWeight: '700',
    fontSize: 20,
    color: colors.Black,
    lineHeight: 20,
    marginTop: 25,
  },
  accountId: {
    fontFamily: Fonts.regular,
    // fontWeight: '600',
    fontSize: 18,
    color: colors.greyText,
    lineHeight: 20,
    marginTop: 12,
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
  },
  imageView: {
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  modalMainContainer: {
    minHeight: 420,
    marginHorizontal: 5,
    borderRadius: 10,
    backgroundColor: '#F2F0FE',
    marginHorizontal: 10,
    paddingHorizontal: 20,
  },
  closeBtn: {
    width: 24,
    height: 24,
    backgroundColor: colors.header_text_color,
    borderRadius: 20,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
  btnRound: {
    marginTop: 20,
  },
  imageSize: {
    height: 16,
    width: 16,
  },
  modalHeader: {
    fontSize: 18,
    // fontWeight: '700',
    lineHeight: 25,
    color: colors.Black,
    fontFamily: Fonts.semibold,
    alignSelf: 'center',
  },
  modalsubHeader: {
    fontSize: 15,
    lineHeight: 25,
    color: colors.Black,
    fontFamily: Fonts.regular,
    marginTop: 10,
    marginHorizontal: 5,
  },
  modalScanQR: {
    fontSize: 15,
    lineHeight: 25,
    color: colors.Black,
    fontFamily: Fonts.medium,
    marginTop: 10,
    marginHorizontal: 5,
  },
  two_step_txt: {
    fontSize: 14,
    lineHeight: 25,
    color: colors.Black,
    fontFamily: Fonts.regular,
    marginTop: 10,
    marginHorizontal: 5,
  },
  addres_text: {
    fontSize: 14,
    // color: colors.lightgreytext,
    lineHeight: 20,
    fontWeight: '600',
    textTransform: 'none',
    fontFamily: Fonts.regular,
  },
});
