import React, { memo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Linking from "expo-linking";

function SourceItem({ sourceLink, title }) {
  const handleClick = () => {
    if (sourceLink) Linking.openURL(sourceLink);
  };

  return (
    <TouchableOpacity
      style={styles.container}
      disabled={!sourceLink}
      onPress={handleClick}
    >
      <Text style={[styles.text, sourceLink && styles.linkText]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 5,
  },
  linkText: {
    color: "#2200cc",
    textDecorationLine: "underline",
  },
  text: {
    fontWeight: "500",
    fontSize: 16,
  },
});

export default memo(SourceItem);
