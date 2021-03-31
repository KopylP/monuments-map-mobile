import { useNavigation } from "@react-navigation/native";
import React from "react";
import { DefaultTheme } from "../../../../theme/default-theme";
import { useLocate } from "../../../../components/hooks/locate-hooks";
import RectangularButton from "../../../../components/atoms/buttons/rectangular-button/rectangular-button";

export default function GalleryButton({ name, id, style = {} }) {

  const { navigate } = useNavigation();
  const { t } = useLocate();

  return (
    <RectangularButton
      iconName="ios-images"
      iconType="ionicon"
      color={DefaultTheme.palette.colors.primary.main}
      style={style}
      textColor="white"
      title={t("gallery")}
      onPress={() =>
        navigate("Gallery", {
          title: name,
          monumentId: id,
        })
      }
    />
  );
}
