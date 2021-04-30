import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MapView from "react-native-maps";
import { defaultMapCenter } from "../../../config";
import MyLocationButton from "./my-location-button";
import * as Location from "expo-location";

class AppMap extends Component {
  state = {
    userAccessLocation: false,
  };

  mapRef = React.createRef();

  animateToRegion(region, duration) {
    this.mapRef.current.animateToRegion(region, duration);
  }

  handleMapReady = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status === "granted") {
      this.setState({
        userAccessLocation: true,
      });
    }
  };

  handleLocationButtonPress = async () => {
    if (this.state.userAccessLocation) {
      const location = await Location.getLastKnownPositionAsync();
      if (location) {
        this.animateToRegion(
          {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.006,
            longitudeDelta: 0.006,
          },
          200
        );
      }
    }
  };

  render() {
    const { children } = this.props;
    const { userAccessLocation } = this.state;
    return (
      <View style={[StyleSheet.absoluteFill]}>
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
          style={[StyleSheet.absoluteFill]}
          showsMyLocationButton={false}
        >
          {children}
        </MapView>
        {userAccessLocation && (
          <MyLocationButton onPress={this.handleLocationButtonPress} />
        )}
      </View>
    );
  }
}

export default AppMap;
