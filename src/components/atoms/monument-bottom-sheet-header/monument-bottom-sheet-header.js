import { BlurView } from "expo-blur";
import React, { memo } from "react";
import { View, Text } from "react-native";
import { DefaultTheme } from "../../../theme/default-theme";
import { useLocateYear } from "../../hooks/locate-hooks";

function MonumentBottomSheetHeader({ year, period }) {
  console.log(year, period);
  const yearString = useLocateYear(year, period);

  console.log("yearString", yearString);

  return (
    <BlurView
      intensity={90}
      style={{
        padding: 5,
        borderRadius: 20,
        overflow: "hidden",
        alignSelf: "flex-end",
        margin: 5,
      }}
    >
      <Text
        style={{
          fontSize: 16,
          fontWeight: "600",
          color: DefaultTheme.palette.colors.primary.dark,
        }}
      >
        {yearString}
      </Text>
    </BlurView>
  );
}

export default memo(MonumentBottomSheetHeader);
