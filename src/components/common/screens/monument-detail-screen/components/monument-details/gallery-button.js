import { useNavigation } from "@react-navigation/native";
import React from "react";
import { DefaultTheme } from "../../../../../../theme/default-theme";
import { useLocate } from "../../../../../hooks/locate-hooks";
import RectangularButton from "../../../../../template/buttons/rectangular-button";

export default function GalleryButton({ name, id }) {

  const { navigate } = useNavigation();
  const { t } = useLocate();

  return (
    <RectangularButton
      iconName="ios-images"
      iconType="ionicon"
      color={DefaultTheme.palette.colors.primary.main}
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
