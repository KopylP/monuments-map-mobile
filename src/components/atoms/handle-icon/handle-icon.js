import { BlurView } from "expo-blur";
import React from "react";
import { View } from "react-native";

export default function HandleIcon({ style }) {
  return (
    <View
      style={{
        ...style,
        width: 40,
        height: 5,
        borderRadius: 5,
        backgroundColor: "rgba(200, 200, 200, 0.7)",
        overflow: "hidden",
      }}
      tint="default"
    />
  );
}
