import React from "react";
import { DefaultTheme } from "../../../theme/default-theme";
import RectangularButton from "../../template/buttons/rectangular-button";

export default function SourcesButton({ sources, style = {}, canPress = true }) {

  const handlePress = () => {
    console.log("PREEEEEEEEEEEEESSSSS");
  }

  return (
    <RectangularButton
      iconName="info"
      iconType="font-awesome"
      color={DefaultTheme.pallete.colors.primary.extraLight}
      textColor="white"
      title="Джерела"
      style={style}
      onPress={canPress && handlePress}
    />
  );
}
