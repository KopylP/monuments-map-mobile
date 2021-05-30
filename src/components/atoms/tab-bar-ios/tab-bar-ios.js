import { BottomTabBar } from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";
import React, { memo } from "react";

const TabBarIOS = (props) => {
  return (
    <BlurView
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
      }}
      tint="light"
      intensity={100}
    >
      <BottomTabBar {...props} />
    </BlurView>
  );
};

export default memo(TabBarIOS);
