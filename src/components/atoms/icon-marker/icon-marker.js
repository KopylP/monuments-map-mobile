import React from "react";
import { Icon } from "react-native-elements";
import { Marker } from "react-native-maps";
import { DefaultTheme } from "../../../theme/default-theme";

export default function IconMarker(props) {
  const { color = DefaultTheme.palette.colors.primary.main } = props;
  return (
    <Marker
      {...props}
      centerOffset={{
        x: 0,
        y: -10,
      }}
    >
      <Icon
        name="map-marker-alt"
        type="font-awesome-5"
        size={30}
        color={color}
      />
    </Marker>
  );
}
