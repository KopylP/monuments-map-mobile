import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useLocateYear } from "../../hooks/locate-hooks";

export default function GalleryYear({ year, period, style={} }) {

  const yearString = useLocateYear(year, period);

  return (
    <View
      style={{ ...style, ...styles.container }}
    >
      <Text style={styles.text}>{ yearString }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    height: 30,
    backgroundColor: "rgba(60, 60, 60, 0.5)",
    paddingHorizontal: 10,
  },
  text: {
    color: "white",
    fontWeight: "600"
  }
});
