import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Fonts, colors } from "../../theme";

const TabIcon = (props) => {
  return (
    <View style={styles.viewMainContainer}>
      <Image
        source={props.focused ? props.activeImg : props.defaultImg}
        style={[props.ImgSize,{resizeMode:'contain', tintColor:props.focused
        ? colors.green
        : colors.grey}]}
      />
      <Text
        style={[
          styles.titleText,
          {
            color: props.focused
              ? colors.green
              : colors.grey,
          },
        ]}
      >
        {props.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewMainContainer: {

    alignItems: "center",
  },
  titleText: {
    paddingTop: 5,
    fontSize: 12,
    fontWeight:'400',
    lineHeight:14,
    fontFamily: Fonts.medium,
  },
});

export { TabIcon };
