import React from "react";
import { StyleSheet } from "react-native";
import { Linking } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";
import { convertSourceTypeToIconType } from "./podcast-icon";
import PodcastList from "./podcast-list";

export default function MonumentPodcastItem({ sources, title }) {
  sources = sources.sort((a, b) => {
    const typeA = convertSourceTypeToIconType(a.sourceType);
    const typeB = convertSourceTypeToIconType(b.sourceType);
    if (typeA == "default") return 1;
    if (typeB == "default") return -1;
    return typeA.localeCompare(typeB);
  });

  return (
    <View activeOpacity={0.5} style={styles.container}>
      <Text numberOfLines={2} style={styles.title}>
        {title}
      </Text>
      <PodcastList sources={sources}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 7,
  },
  title: {
    color: "#666",
    fontSize: 15,
    fontWeight: "bold",
  },
});
