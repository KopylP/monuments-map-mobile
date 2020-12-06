import React from "react";
import { TextInput } from "react-native";
import { DefaultTheme } from "../../../theme/default-theme";

export default function CopyableText({ children, style }) {
  return (
    <TextInput
      style={style}
      multiline
      scrollEnabled={false}
      selectionColor={DefaultTheme.pallete.colors.primary.main}
      value={children}
      editable={false}
    />
  );
}
