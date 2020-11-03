import React from "react";
import { StyleSheet } from "react-native";
import MapView from "react-native-maps";
import { defaultMapCenter } from "../../../config";

export default function AppMap({ children = null }) {
  return (
    <MapView
      initialRegion={{
        latitude: defaultMapCenter.lat,
        longitude: defaultMapCenter.lng,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      showsPointsOfInterest={false}
      showsCompass={false}
      showsUserLocation
      showsMyLocationButton
      style={StyleSheet.absoluteFill}
      
    >
      {children}
    </MapView>
  );
}
