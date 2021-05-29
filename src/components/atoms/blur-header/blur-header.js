import { BlurView } from "expo-blur";
import React, { memo } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function BlurHeader() {
  const { top } = useSafeAreaInsets();
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
