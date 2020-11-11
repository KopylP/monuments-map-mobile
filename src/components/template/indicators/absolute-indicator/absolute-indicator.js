import React from "react";
import { ActivityIndicator, View } from "react-native";
import { DefaultTheme } from "../../../../theme/default-theme";

export default function AbsoluteIndicator({ backgroundColor = "transparent" }) {
  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: "center",
        backgroundColor,
        justifyContent: "center",
      }}
    >
      <ActivityIndicator color={DefaultTheme.pallete.colors.primary.main} />
    </View>
  );
}
