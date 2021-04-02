import React, { useRef } from "react";
import AppMap from "../../atoms/app-map/app-map";
import MonumentMarker from "../monument-marker/monument-marker";



export default function MonumentsMap({ monuments, onClickMonument }) {
  const mapRef = useRef();

  const handleMarkerPress = (monument) => {
    onClickMonument({...monument});
    mapRef.current.animateToRegion(
      {
        latitude: monument.latitude,
        longitude: monument.longitude,
        latitudeDelta: 0.006,
        longitudeDelta: 0.006,
      },
      200
    );
  };

  return (
    <AppMap ref={mapRef}>
      {monuments.map((monument) => (
        <MonumentMarker monument={monument} onPress={handleMarkerPress} key={monument.id + ''}/>
      ))}
    </AppMap>
  );
}
