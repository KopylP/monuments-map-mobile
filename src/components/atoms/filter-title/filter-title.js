import React from "react";
import { Text, StyleSheet } from "react-native";

export default function FilterTitle({ title, style = {} }) {
  return <Text style={[styles.text, style]}>{title}</Text>;
}

const styles = StyleSheet.create({
  text: {
    margin: 5,
    fontSize: 20,
    fontWeight: "700",
  },
});
