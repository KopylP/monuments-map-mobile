import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Chip({ title, color, textColor = "white", style = {} }) {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: color,
        },
        style,
      ]}
    >
      <Text style={[{ color: textColor }, styles.text]} numberOfLines={1}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: "600"
  },
});
