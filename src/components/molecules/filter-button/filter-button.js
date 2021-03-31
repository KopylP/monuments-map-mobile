import React from "react";
import { DefaultTheme } from "../../../theme/default-theme";
import ButtonWithBadge from "../../atoms/button-with-badge";

export default function FilterButton({ style, onPress, selectedFiltersCount }) {
  return (
    <ButtonWithBadge
      style={style}
      onPress={onPress}
      badgeCount={selectedFiltersCount}
      icon={{
        name: "ios-options",
        type: "ionicon",
        size: 20,
        color: "white",
      }}
      buttonStyle={{
        backgroundColor: DefaultTheme.palette.colors.primary.main,
        padding: 5,
        borderRadius: 5,
      }}
    />
  );
}
