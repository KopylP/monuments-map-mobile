import React from "react";
import { DefaultTheme } from "../../../theme/default-theme";
import { useLocate } from "../../hooks/locate-hooks";
import RectangularButton from "../../template/buttons/rectangular-button";

export default function SourcesButton({ sources, style = {}, canPress = true }) {

  const { t } = useLocate();

  const handlePress = () => {
    
  }

  return (
    <RectangularButton
      iconName="info"
      iconType="font-awesome"
      color={DefaultTheme.pallete.colors.primary.extraLight}
      textColor="white"
      title={t("sources")}
      style={style}
      onPress={canPress && handlePress}
    />
  );
}
