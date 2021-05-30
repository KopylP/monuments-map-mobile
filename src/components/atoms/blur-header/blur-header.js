import { BlurView } from "expo-blur";
import React, { memo } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { isAndroid } from "../../../helpers/platform-helpers";
import { DefaultTheme } from "../../../theme/default-theme";

function BlurHeader() {
  const { top } = useSafeAreaInsets();

  if (isAndroid)
    return (
      <View
        style={{
          left: 0,
          right: 0,
          top: 0,
          height: top,
          position: "absolute",
          backgroundColor: DefaultTheme.palette.colors.screenBackground.main,
        }}
      />
    );

  return (
    <BlurView
      intensity={100}
      tint="light"
      style={{
        left: 0,
        right: 0,
        top: 0,
        height: top,
        position: "absolute",
        backgroundColor: "transparent",
      }}
    />
  );
}

export default memo(BlurHeader);
