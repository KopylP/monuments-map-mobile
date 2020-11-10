import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Chip({ title, color, style = {} }) {
  return (
    <View
      style={[
        styles.container,
        {
          borderColor: color,
        },
        style,
      ]}
    >
      <Text style={[{ color: color }, styles.text]}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    borderWidth: 2,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: "600"
  },
});
