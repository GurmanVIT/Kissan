import { StyleSheet } from "react-native";
import { Images, colors, Fonts } from "../../../theme";

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
  pinRow: {
    flexDirection: "row",
   // justifyContent: "space-around",
    paddingHorizontal: 10,
  },
  indicatorWrapStyle: {
    flexDirection: "row",
    justifyContent: "center",
    height: 50,
  },
  enterPinWrap: {
    paddingHorizontal:20,
    marginTop: 90,
   // height: "20%",
  },
  enterPinTextStyle: {
    fontFamily: Fonts.regular,
    fontSize: 19,
    lineHeight:22,
    fontWeight:'500'
  },
  subHeadingTextStyle: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    color:colors.grey,
  },
  itemsStyle: {
     marginHorizontal: 22,
    width: 20,
    height: 5,
    backgroundColor: colors.grey,

  },
  imgStyle: {
    height: 20,
    width: 20,
    marginHorizontal: 20,
  },
  outerViewStyle: {
    width: 30,
    height: 5,
    marginHorizontal: 16,
   // borderRadius: 20,
    backgroundColor: colors.grey,
  //  borderRadius: 20,
   // marginHorizontal: 20,
  },
});
