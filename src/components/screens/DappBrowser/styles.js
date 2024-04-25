import {Dimensions, StyleSheet} from 'react-native';
import {Images, colors as Colors, Fonts, colors} from '../../../theme';

export default StyleSheet.create({
  modalView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // opacity: 0.94,
    backgroundColor: 'rgba(52, 52, 52, 0.4)',
  },
  headerView: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
  },

  modalinner: {
    borderRadius: 18,
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 20,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.84,
    elevation: 2,
    width: '85%',
    backgroundColor: colors.white,
  },
  vwSignTransaction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 40,
    marginBottom: 8,
  },
  titleSign: {
    fontSize: 17,
  },
  textLbl: {
    fontSize: 15,
  },
  txtValue: {
    width: '75%',
    fontSize: 15,
  },
  enabledFessStyle: {
    fontSize: 14,
  },
  enabledFessvalueStyle: {
    fontSize: 11,
  },

  disabledFessStyle: {
    fontSize: 14,
  },

  disabledFessvalueStyle: {
    fontSize: 11,
  },

  mainFeeView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 8,
    marginBottom: 14,
    borderRadius: 10,
    borderWidth: 1,
    overflow: 'hidden',
    borderColor: '#E6E6E6',
    backgroundColor: '#E6E6E6',
  },
  feeStyle: {
    marginTop: 35,
    flexDirection: 'row',
    marginHorizontal: 26,
    justifyContent: 'space-between',
  },

  feeslowStyle: {
    paddingVertical: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    width: '33%',
    paddingLeft: 12,
  },

  mainViewLoader: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: 'rgba(52, 52, 52, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
  },
  dropdown: {
    position: 'absolute',
    backgroundColor: 'white',
    alignSelf: 'center',
    paddingHorizontal: 20,
    top: -30,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 1,
  },
  searchBtn: {
    // position: 'absolute',
    // right: 10,
    // bottom: 10,
    // backgroundColor: 'red',
    padding: 8,
    // top: 5
  },
  viewGas: {flex: 1, backgroundColor: 'black', paddingTop: 40},
  buttonStylesSubmit: {
    paddingHorizontal: 22,
    marginTop: 30,
  },
  modalVieww: {
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  tronModal: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 25,
  },
  tronModal1: {
    flex: 1,
    justifyContent: 'center',
  },
  modalTitle: {
    marginTop: 20,
    alignSelf: 'center',
  },
  searchedText: {
    width: '90%',
    paddingLeft: 20,
    fontFamily: Fonts.regular,
    fontSize: 14,
  },
});
