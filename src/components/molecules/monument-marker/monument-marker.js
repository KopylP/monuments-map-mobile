import React, { memo } from "react";
import { DefaultTheme } from "../../../theme/default-theme";
import IconMarker from "../../atoms/icon-marker";

function MonumentMarker({ monument, onPress = (p) => p }) {

  const { condition: { abbreviation } } = monument;

  let color = null;

  switch (abbreviation) {
    case "lost-recently":
    case "lost":
      color = "#dc0a14";
      break;
    default:
      color = DefaultTheme.palette.colors.primary.main;
  }

  return (
    <IconMarker
      onPress={() => onPress(monument)}
      coordinate={{
        latitude: monument.latitude,
        longitude: monument.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      color={color}
    />
  );
}

export default memo(MonumentMarker);
