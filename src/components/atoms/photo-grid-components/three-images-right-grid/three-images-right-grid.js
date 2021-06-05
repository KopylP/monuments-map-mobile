import React, { memo } from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import FastImage from "react-native-fast-image";
import { PHOTO_MARGIN, PHOTO_GRID_HEIGHT } from "..";

function ThreeImagesRightGrid({ data, onPress = p => p }) {
  if (!data || !data.length || data.length != 3) {
    throw new TypeError("Data is invalid");
  }

  function handlePress(index) {
    onPress(data[index].payload);
  }

  return (
    <View style={styles.container}>
      <FastImage style={styles.image} source={data[0].source} onPress={handlePress(0)}/>
      <View style={styles.verticalDelimiter}/>
      <View style={styles.rightView}>
        <FastImage style={styles.image} source={data[1].source} onPress={handlePress(1)}/>
        <View style={styles.horizontalDelimiter}/>
        <FastImage style={styles.image} source={data[2].source} onPress={handlePress(2)}/>
      </View>
    </View>
  );
}

export default memo(ThreeImagesRightGrid);

const styles = new StyleSheet.create({
  container: {
    width: "100%",
    height: PHOTO_GRID_HEIGHT,
    flexDirection: "row",
  },
  rightView: {
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
  }
});
