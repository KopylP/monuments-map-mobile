import React, { memo } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { View } from "react-native";
import FastImage from "react-native-fast-image";
import { PHOTO_MARGIN, PHOTO_GRID_HEIGHT } from "..";

function ThreeImagesLeftGrid({ data, onPress = (p) => p }) {
  if (!data || !data.length || data.length != 3) {
    throw new TypeError("Data is invalid");
  }

  function handlePress(index) {
    onPress(data[index].payload);
  }

  return (
    <View style={styles.container}>
      <View style={styles.leftView}>
        <TouchableOpacity style={styles.image} onPress={() => handlePress(0)}>
          <FastImage style={styles.image} source={data[0].source} />
        </TouchableOpacity>
        <View style={styles.horizontalDelimiter} />
        <TouchableOpacity style={styles.image} onPress={() => handlePress(1)}>
          <FastImage style={styles.image} source={data[1].source} />
        </TouchableOpacity>
      </View>
      <View style={styles.verticalDelimiter} />
      <TouchableOpacity style={styles.image} onPress={() => handlePress(2)}>
        <FastImage style={styles.image} source={data[2].source} />
      </TouchableOpacity>
    </View>
  );
}

export default memo(ThreeImagesLeftGrid);

const styles = new StyleSheet.create({
  container: {
    width: "100%",
    height: PHOTO_GRID_HEIGHT,
    flexDirection: "row",
  },
  leftView: {
    flex: 1,
  },
  horizontalDelimiter: {
    height: PHOTO_MARGIN,
    width: "100%",
    backgroundColor: "transparent",
  },
  verticalDelimiter: {
    width: PHOTO_MARGIN,
    height: "100%",
    backgroundColor: "transparent",
  },
  image: {
    flex: 1,
  },
});
