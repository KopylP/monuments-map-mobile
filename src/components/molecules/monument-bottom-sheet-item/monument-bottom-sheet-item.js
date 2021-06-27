import { BlurView } from "expo-blur";
import React, { memo } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { isIOS } from "react-native-elements/dist/helpers";
import FastImage from "react-native-fast-image";
import { Button } from "react-native-elements";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getPhotoUrlWithSize } from "../../../services/photo-service";
import { DefaultTheme } from "../../../theme/default-theme";
import CloseButton from "../../atoms/close-button";
import HandleIcon from "../../atoms/handle-icon";
import { useLocate } from "../../hooks/locate-hooks";
import { SCREEN_WIDTH } from "../../../helpers/dimensions-helpers";
import OpenInMapButton from "./components/open-in-map-button";

function MonumentBottomSheetItem({
  monument,
  onOpenMonument = (monumentId) => monumentId,
  onClose,
}) {
  const { t } = useLocate();
  const { bottom } = useSafeAreaInsets();

  const ContainerView = isIOS ? BlurView : View;

  const containerViewProps = Platform.select({
    ios: {
      intensity: 100,
      tint: "light",
    },
    default: {},
  });

  function handleOpenButtonPressed() {
    onOpenMonument(monument);
  }

  return (
    <View style={styles.outerContainer}>
      <ContainerView
        {...containerViewProps}
        style={isIOS ? styles.iosContainer : styles.androidContainer}
      >
        <FastImage
          style={styles.image}
          source={{ uri: getPhotoUrlWithSize(monument.majorPhotoImageUrl, 500) }}
        />
        <Text style={styles.title}>{monument.name}</Text>
        <View
          style={{
            marginBottom: 5,
            marginLeft: 15,
            marginRight: 15,
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <Button
            title={t("Open")}
            type="solid"
            color={DefaultTheme.palette.colors.primary.main}
            onPress={handleOpenButtonPressed}
            buttonStyle={styles.openButton}
          />
          <OpenInMapButton {...monument} style={styles.navigationButton}/>
        </View>
      </ContainerView>
      {isIOS && (
        <View
          style={{
            height: bottom + DefaultTheme.dims.tabHeight,
          }}
        />
      )}
      <HandleIcon style={styles.handleIcon} />
      <CloseButton style={styles.closeButton} onClick={onClose} />
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
    borderRadius: 10,
    overflow: "hidden",
    width: SCREEN_WIDTH - 30 - 60,
    backgroundColor: DefaultTheme.palette.colors.primary.main,
  },
  navigationButton: {
    width: 50,
    borderRadius: 10,
  },
  image: {
    flex: 1,
  },
});
