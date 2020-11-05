import React from "react";
import { ActivityIndicator } from "react-native";
import { View } from "react-native";
import { DefaultTheme } from "../../../theme/default-theme";

export default function ContentSpinner({ borderRadius = 0 }) {
  return (
    <View
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        borderRadius,
      }}
    >
      <ActivityIndicator
        size="large"
        color={DefaultTheme.pallete.colors.primary.main}
      />
    </View>
  );
}
