import React, { memo } from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import FastImage from "react-native-fast-image";
import { PHOTO_MARGIN, PHOTO_GRID_HEIGHT } from "..";

function OneImageGrid({ data, onPress = (p) => p }) {
  if (!data || !data.length || data.length != 1) {
    throw new TypeError("Data is invalid");
  }

  function handlePress() {
    onPress(data[0].payload);
  }

  return (
    <FastImage
      style={styles.container}
      source={data[0].source}
      onPress={handlePress}
    />
  );
}

export default memo(OneImageGrid);

const styles = new StyleSheet.create({
  container: {
    width: "100%",
    height: PHOTO_GRID_HEIGHT,
    resizeMode: "cover"
  },
});
