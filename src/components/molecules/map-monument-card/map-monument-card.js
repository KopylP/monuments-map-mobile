import React from "react";
import MonumentsCard from "../monument-card";

export default function MapMonumentCard({
  monument,
  enabled = true,
  onPress = (p) => p,
}) {
  const shareId = `map-${monument ? monument.id : 0}`;
  return (
    <MonumentsCard
      {...monument}
      shareId={shareId}
      style={{
        flex: 1,
      }}
      onPress={(monument) => {
        if (enabled) {
          onPress(monument, shareId);
        }
      }}
    />
  );
}
