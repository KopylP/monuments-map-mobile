import { useNavigation } from "@react-navigation/native";
import React from "react";
import { DefaultTheme } from "../../../../theme/default-theme";
import RectangularButton from "../../../template/buttons/rectangular-button";

export default function PhotoViewButton({
  style = {},
  canPress = true,
  imageBase64,
}) {

  const { navigate } = useNavigation();

  const handlePress = () => {
    navigate("PhotoView", {
      imageBase64,
    });
  };

  return (
    <RectangularButton
      iconName="search-plus"
      iconType="font-awesome"
      color={DefaultTheme.pallete.colors.primary.main}
      textColor="white"
      title="Перегляд"
      style={style}
      onPress={canPress ? handlePress : p => p}
    />
  );
}
