import React from "react";
import { View } from "react-native";
import MonumentsCard from "../../molecules/monument-card";

export default function MonumentListItem({
  majorPhotoImageId,
  id,
  name,
  onPress = (p) => p,
}) {
  const shareId = `item-${id}`;
  return (
    <MonumentsCard
      style={{ height: 250 }}
      id={id}
      majorPhotoImageId={majorPhotoImageId}
      name={name}
      shareId={shareId}
      onPress={onPress}
    />
  );
}
