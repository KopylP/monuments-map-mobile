import React from "react";
import { TouchableOpacity } from "react-native";
import { Linking } from "react-native";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import PodcastIcon, { convertSourceTypeToIconType } from "./podcast-icon";

export default function PodcastList({ sources }) {
  const handleClick = (sourceLink) => {
    Linking.openURL(sourceLink);
  };

  return (
    <View style={styles.iconContainer}>
      {sources.map((source, i) => (
        <TouchableOpacity onPress={() => handleClick(source.sourceLink)} key={i}>
          <PodcastIcon
            style={styles.icon}
            type={convertSourceTypeToIconType(source.sourceType)}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    width: "100%",
    flexWrap: "wrap",
    flexDirection: "row",
    marginTop: 10,
  },
  icon: {
    marginRight: 10,
  },
});
