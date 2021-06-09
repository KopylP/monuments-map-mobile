import React, { memo } from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
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
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <FastImage style={styles.image} source={data[0].source} />
    </TouchableOpacity>
  );
}

export default memo(OneImageGrid);

const styles = new StyleSheet.create({
  container: {
    width: "100%",
    height: PHOTO_GRID_HEIGHT,
    resizeMode: "cover",
  },
  image: {
    flex: 1,
  },
});
