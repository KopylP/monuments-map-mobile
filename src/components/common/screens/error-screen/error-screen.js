import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ErrorScreen({ error = null, onRefresh = (p) => p }) {
  return (
    <View style={StyleSheet.absoluteFill}>
      <Text>Error</Text>
      <TouchableOpacity onPress={onRefresh}>
        <Text>Refresh</Text>
      </TouchableOpacity>
    </View>
  );
}
