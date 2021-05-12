import { useNavigation } from "@react-navigation/native";
import React from "react";
import { DefaultTheme } from "../../../theme/default-theme";
import { useLocate } from "../../hooks/locate-hooks";
import RectangularButton from "../../atoms/buttons/rectangular-button/rectangular-button";
import { SOURCES_SCREEN } from "../../../navigations/route-consts/monuments-detail-navigation-consts";

export default function SourcesButton({
  sources,
  style = {},
  canPress = true,
}) {
  const { t } = useLocate();
  const { navigate } = useNavigation();

  const handlePress = () => {
    navigate(SOURCES_SCREEN, {
      sources: sources,
    });
  };

  return (
    <RectangularButton
      iconName="info"
      iconType="font-awesome"
      color={DefaultTheme.palette.colors.primary.extraLight}
      textColor="white"
      title={t("sources")}
      style={style}
      onPress={canPress ? handlePress : (p) => p}
    />
  );
}
