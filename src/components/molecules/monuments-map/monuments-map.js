import React, { memo, useRef } from "react";
import { Marker } from "react-native-maps";
import AppMap from "../../atoms/app-map/app-map";
import MonumentMarker from "../monument-marker/monument-marker";

function MonumentsMap({
  monuments,
  onClickMonument,
  locationButtonBottomInset = 0,
}) {
  const mapRef = useRef();

  const handleMarkerPress = (monument) => {
    onClickMonument({ ...monument });
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

  function mapMonumentToMarker(monument) {
    return (
      <MonumentMarker
        coordinate={{
          latitude: monument.latitude,
          longitude: monument.longitude,
        }}
        monument={monument}
        onPress={handleMarkerPress}
        key={monument.id + ""}
      />
    );
  }

  return (
    <AppMap ref={mapRef} locationButtonBottomInset={locationButtonBottomInset}>
      {monuments.map(mapMonumentToMarker)}
    </AppMap>
  );
}

export default memo(MonumentsMap);
