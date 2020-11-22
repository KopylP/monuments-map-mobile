import React, { Component } from "react";
import { StyleSheet } from "react-native";
import MapView from "react-native-maps";
import { defaultMapCenter } from "../../../config";
import * as Location from "expo-location";

export default class AppMap extends Component {
  state = {
    userAccessLocation: false,
  };

  mapRef = React.createRef();

  animateToRegion(region, duration) {
    this.mapRef.current.animateToRegion(region, duration);
  }

  handleMapReady = async () => {
    let { status } = await Location.requestPermissionsAsync();
    if (status === "granted") {
      this.setState({
        userAccessLocation: true,
      });
    }
  };

  render() {
    const { children } = this.props;
    const { userAccessLocation } = this.state;
    return (
      <MapView
        ref={this.mapRef}
        onMapReady={this.handleMapReady}
        initialRegion={{
          latitude: defaultMapCenter.lat,
          longitude: defaultMapCenter.lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsPointsOfInterest={false}
        showsCompass={false}
        showsUserLocation={userAccessLocation}
        showsMyLocationButton={userAccessLocation}
        style={[StyleSheet.absoluteFill]}
      >
        {children}
      </MapView>
    );
  }
}
