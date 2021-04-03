import React, { memo } from "react";
import { DefaultTheme } from "../../../theme/default-theme";
import ButtonWithBadge from "../../atoms/buttons/button-with-badge";

function FilterButton({ style, onPress, selectedFiltersCount }) {
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

export default memo(FilterButton);