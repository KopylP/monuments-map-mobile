import React from "react";
import { StyleSheet, View } from "react-native";
import SourcesList from "./sources-list";

export default function SourcesScreen({ route }) {
  const { sources } = route.params;

  return (
    <View style={StyleSheet.absoluteFill}>
      <SourcesList sources={sources} />
    </View>
  );
}
