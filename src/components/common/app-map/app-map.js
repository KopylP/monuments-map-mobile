import React, { Component } from "react";
import { StyleSheet } from "react-native";
import MapView from "react-native-maps";
import { defaultMapCenter } from "../../../config";

export default class AppMap extends Component {
  mapRef = React.createRef();

  animateToRegion(region, duration) {
    this.mapRef.current.animateToRegion(region, duration);
  }

  render() {
    const { children } = this.props;
    return (
      <MapView
        ref={this.mapRef}
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
}
