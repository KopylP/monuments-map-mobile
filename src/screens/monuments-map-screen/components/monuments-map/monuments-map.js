import React, { useRef } from "react";
import { connect } from "react-redux";
import AppMap from "../../../../components/common/app-map/app-map";
import MonumentMarker from "../../../../components/common/monuments/monument-marker";
import { changeSelectedMonument } from "../../../../redux/actions/selected-monument-actions";


function MonumentsMap({ monuments, changeSelectedMonument }) {
  const mapRef = useRef();

  const handleMarkerPress = (monument) => {
    changeSelectedMonument({...monument});
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

const bindStateToProps = ({ monuments: { monuments } }) => ({ monuments });
const bindDispatchToProps = { changeSelectedMonument };

export default connect(bindStateToProps, bindDispatchToProps)(MonumentsMap);
