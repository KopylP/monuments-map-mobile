import { BlurView } from "expo-blur";
import React, { memo } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { isIOS } from "react-native-elements/dist/helpers";
import FastImage from "react-native-fast-image";
import { Button } from "react-native-paper";
import { getPhotoUrlById } from "../../../services/photo-service";
import { DefaultTheme } from "../../../theme/default-theme";
import CloseButton from "../../atoms/close-button";
import HandleIcon from "../../atoms/handle-icon";
import { useLocate } from "../../hooks/locate-hooks";

function MonumentBottomSheetItem({
  monument,
  onOpenMonument = (monumentId) => monumentId,
  onClose,
}) {
  const { t } = useLocate();

  const ContainerView = isIOS ? BlurView : View;

  const containerViewProps = Platform.select({
    ios: {
      intensity: 100,
      tint: "light",
    },
    default: {},
  });

  return (
    <View style={styles.outerContainer}>
      <ContainerView
        {...containerViewProps}
        style={isIOS ? styles.iosContainer : styles.androidContainer}
      >
        <FastImage
          style={styles.image}
          source={{ uri: getPhotoUrlById(monument.majorPhotoImageId, 500) }}
        />
        <Text style={styles.title}>{monument.name}</Text>
        <Button
          style={styles.openButton}
          mode="contained"
          onPress={() => onOpenMonument(monument)}
          color={DefaultTheme.palette.colors.primary.main}
        >
          {t("Open")}
        </Button>
      </ContainerView>
      <HandleIcon style={styles.handleIcon} />
      <CloseButton style={styles.closeButton} onClose={onClose} />
    </View>
  );
}

export default memo(MonumentBottomSheetItem);

const container = {
  flex: 1,
  borderRadius: 10,
  overflow: "hidden",
  paddingBottom: 15,
  elevation: 0,
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  iosContainer: {
    ...container,
  },
  androidContainer: {
    ...container,
    backgroundColor: "white",
  },
  title: {
    color: "black",
    padding: 15,
    fontSize: 22,
    fontWeight: isIOS ? "600" : "700",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    elevation: 1,
  },
  handleIcon: {
    position: "absolute",
    top: 8,
    alignSelf: "center",
    elevation: 1,
  },
  openButton: {
    marginHorizontal: 15,
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 5,
  },
  image: {
    flex: 1,
  },
});
