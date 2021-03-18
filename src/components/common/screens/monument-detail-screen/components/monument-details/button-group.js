import React from "react";
import { ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import HorizontalButtonsGroup from "../../../../horizontal-buttons-group/hotizontal-buttons-group";
import SourcesButton from "../../../../sources-button/sources-button";
import GalleryButton from "./gallery-button";
import OpenInMapButton from "./open-in-map-button";

export default function ButtonGroup({ monument }) {
  return (
    <HorizontalButtonsGroup
      buttonWidth={70}
      containerPaddingHorizontal={15}
      minButtonMargin={6}
      scrollEnabled={false}
      paddingBottom={10}
    >
      <GalleryButton {...monument} style={styles.button} />
      <OpenInMapButton style={styles.button} {...monument} />
      <SourcesButton style={styles.button} {...monument} />
    </HorizontalButtonsGroup>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
  },
});
