import React from "react";
import IconMarker from "../../template/map/markers/icon-marker";

export default function MonumentMarker({ monument, onPress = (p) => p }) {
  return (
    <IconMarker
      onPress={() => onPress(monument)}
      coordinate={{
        latitude: monument.latitude,
        longitude: monument.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  );
}
