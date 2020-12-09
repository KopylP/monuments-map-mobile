import React from "react";
import { TextInput, Text } from "react-native";
import { DefaultTheme } from "../../../theme/default-theme";
import { isIOS } from "../../../helpers/platform-helpers";
export default function CopyableText({ children, style }) {
  if (isIOS) {
    return (
      <TextInput
        style={{
          color: "black",
          ...style,
        }}
        multiline
        scrollEnabled={false}
        selectionColor={DefaultTheme.pallete.colors.primary.main}
        value={children}
        editable={false}
      />
    );
  }

  return (
    <Text
      selectionColor={DefaultTheme.pallete.colors.primary.extraLight}
      selectable
      style={style}
    >
      {children}
    </Text>
  );
}
