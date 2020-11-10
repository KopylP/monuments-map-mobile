import React from "react";
import openInMap from "../../../../../../helpers/open-in-map";
import { DefaultTheme } from "../../../../../../theme/default-theme";
import RectangularButton from "../../../../../template/buttons/rectangular-button";

export default function OpenInMapButton({ latitude, longitude, name, style }) {
  const handlePress = () => {
    openInMap(latitude, longitude, name);
  };

  return (
    <RectangularButton
      iconName="ios-navigate"
      onPress={handlePress}
      iconType="ionicon"
      style={style}
      color={DefaultTheme.pallete.colors.primary.background}
      textColor={DefaultTheme.pallete.colors.primary.main}
      title="Маршрут"
    />
  );
}
