import React from "react";
import MonumentsCard from "../monument-card";

export default function MapMonumentCard({ monument, enabled = true, onPress = (p) => p }) {
  const shareId = `map-${monument ? monument.id : 0}`;
  return (
    <MonumentsCard
      monument={monument}
      shareId={shareId}
      onPress={(monument, imageBase64) => {
        if (enabled) {
          onPress(monument, imageBase64, shareId);
        }
      }}
    />
  );
}