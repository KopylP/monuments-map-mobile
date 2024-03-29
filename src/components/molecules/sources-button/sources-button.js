import { useNavigation } from "@react-navigation/native";
import React from "react";
import { DefaultTheme } from "../../../theme/default-theme";
import { useLocate } from "../../hooks/locate-hooks";
import RectangularButton from "../../atoms/buttons/rectangular-button/rectangular-button";

export default function SourcesButton({
  sources,
  style = {},
  canPress = true,
}) {
  const { t } = useLocate();
  const { navigate } = useNavigation();

  const handlePress = () => {
    navigate("Sources", {
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
      onPress={canPress ? handlePress : p => p}
    />
  );
}
