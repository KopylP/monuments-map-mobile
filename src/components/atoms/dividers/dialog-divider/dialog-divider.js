import React from "react";
import { Divider } from "react-native-paper";
import { DefaultTheme } from "../../../../theme/default-theme";

export default function DialogDivider() {
  return (
    <Divider
      style={{
        backgroundColor: DefaultTheme.palette.colors.primary.extraLight,
        opacity: 0.3,
      }}
    />
  );
}
