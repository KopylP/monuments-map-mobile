import React, { memo } from "react";
import { ActivityIndicator } from "react-native";
import { View } from "react-native";
import { DefaultTheme } from "../../../theme/default-theme";

function ContentSpinner({ borderRadius = 0 }) {
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
        color={DefaultTheme.palette.colors.primary.main}
      />
    </View>
  );
}

export default memo(ContentSpinner);
