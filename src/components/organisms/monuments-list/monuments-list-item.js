import React from "react";
import { View } from "react-native";
import MonumentsCard from "../../molecules/monument-card";

export default function MonumentListItem({ monument, onPress = (p) => p }) {
  const shareId = `item-${monument.id}`;
  return (
    <View
      style={{
        width: "100%",
        height: 250,
      }}
    >
      <MonumentsCard monument={monument} shareId={shareId} onPress={onPress} />
    </View>
  );
}
