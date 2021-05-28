import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, View, Text } from "react-native";
import FastImage from "react-native-fast-image";

export default function CategoryItem({
  style = {},
  color,
  imageSource,
  title,
}) {
  return (
    <TouchableOpacity
      style={{ ...style, ...styles.container, backgroundColor: color }}
      activeOpacity={0.5}
    >
      <FastImage source={imageSource} style={styles.image} resizeMode="cover" />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: "hidden",
    justifyContent: "flex-end",
    padding: 12,
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },
  image: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    resizeMode: "cover",
    position: "absolute",
  },
});
