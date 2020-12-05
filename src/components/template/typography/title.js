import React from "react";
import { StyleSheet, Text } from "react-native";
import { isIOS } from "../../../helpers/platform-helpers";
export default function Title({ title, style = {} }) {
  return <Text style={[styles.title, style]}>{title}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: isIOS ? "600": "700",
    fontFamily: 'Roboto',
  },
});
