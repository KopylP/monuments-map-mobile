import { useNavigation } from "@react-navigation/native";
import React from "react";
import { DefaultTheme } from "../../theme/default-theme";
import { useLocate } from "../../components/hooks/locate-hooks";
import RectangularButton from "../../components/atoms/buttons/rectangular-button/rectangular-button";

export default function PhotoViewButton({
  style = {},
  canPress = true,
  imageBase64,
}) {

  const { navigate } = useNavigation();
  const { t } = useLocate(); 

  const handlePress = () => {
    navigate("PhotoView", {
      imageBase64,
    });
  };

  return (
    <RectangularButton
      iconName="search-plus"
      iconType="font-awesome"
      color={DefaultTheme.palette.colors.primary.main}
      textColor="white"
      title={t("view")}
      style={style}
      onPress={canPress ? handlePress : p => p}
    />
  );
}
