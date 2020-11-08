import React from "react";
import { List } from "react-content-loader/native";
import { View } from "react-native";

export default function Loader() {
  return (
    <View style={{padding: 20}}>
      <List style={{ marginTop: 10 }} />
      <List style={{ marginTop: 10 }} />
      <List style={{ marginTop: 10 }} />
    </View>
  );
}
