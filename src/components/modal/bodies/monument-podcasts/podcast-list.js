import React from "react";
import { TouchableOpacity } from "react-native";
import { FlatList } from "react-native";
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
      <FlatList
        columnWrapperStyle={{ flexWrap: "wrap" }}
        numColumns={5}
        data={sources}
        keyExtractor={(item) => item.sourceLink}
        renderItem={({ item }) => (
          <TouchableOpacity style={{padding: 2}} onPress={() => handleClick(item.sourceLink)}>
            <PodcastIcon
              style={styles.icon}
              type={convertSourceTypeToIconType(item.sourceType)}
            />
          </TouchableOpacity>
        )}
      />
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
    // marginRight: 10,
    // marginTop: 10,
  },
});
