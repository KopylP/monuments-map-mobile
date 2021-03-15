import React from "react";
import openInMap from "../../../../../../helpers/open-in-map";
import { DefaultTheme } from "../../../../../../theme/default-theme";
import { useLocate } from "../../../../../hooks/locate-hooks";
import RectangularButton from "../../../../../template/buttons/rectangular-button";

export default function OpenInMapButton({ latitude, longitude, name, style }) {

  const { t } = useLocate();

  const handlePress = () => {
    openInMap(latitude, longitude, name);
  };

  return (
    <RectangularButton
      iconName="ios-navigate"
      onPress={handlePress}
      iconType="ionicon"
      style={style}
      color={DefaultTheme.palette.colors.primary.extraLight}
      textColor="white"
      title={t("route")}
    />
  );
}
