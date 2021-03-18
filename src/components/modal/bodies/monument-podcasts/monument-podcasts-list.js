import React from "react";
import { View } from "react-native";
import { FlatList } from "react-native";
import { Divider } from "react-native-paper";
import { DefaultTheme } from "../../../../theme/default-theme";
import MonumentPodcastItem from "./monument-podcast-item";

export default function MonumentPodcastsList({ sources, style = {}, }) {
  return (
    <FlatList
      data={sources}
      style={style}
      renderItem={({ item }) => {
        return <MonumentPodcastItem title={item.key} sources={item.values} />;
      }}
      keyExtractor={(item) => item.key}
      ItemSeparatorComponent={() => <Divider style={{
          backgroundColor: DefaultTheme.palette.colors.primary.extraLight,
          opacity: 0.3,
      }}/>}
    />
  );
}
