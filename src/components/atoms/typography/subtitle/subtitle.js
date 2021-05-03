import React, { memo } from "react";
import { Text, StyleSheet } from "react-native";

function Subtitle({ title, style = {} }) {
  return <Text style={[styles.text, style]}>{title}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "700",
    color: "black"
  },
});

export default memo(Subtitle);
