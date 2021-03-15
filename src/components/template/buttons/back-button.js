import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import { DefaultTheme } from "../../../theme/default-theme";

export default function BackButton({
  containerStyle = {},
  onPress = (p) => p,
  iconColor = "white",
  iconStyle = {},
  iconSize = 30,
  withBackButton = true,
  backColor = DefaultTheme.palette.colors.primary.main,
}) {
  return (
    <View style={containerStyle}>
      <TouchableOpacity onPress={onPress} style={styles.iconTouchableOpacity}>
        <Icon
          type="ionicon"
          name="md-arrow-back"
          iconStyle={iconStyle}
          size={iconSize}
          color={iconColor}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  backIconContainer: {
    position: "absolute",
    top: 5,
    left: 6,
  },
  iconTouchableOpacity: {
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});
