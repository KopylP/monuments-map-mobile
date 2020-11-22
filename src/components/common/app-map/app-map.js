import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MapView from "react-native-maps";
import { defaultMapCenter } from "../../../config";
import * as Location from "expo-location";
import { Button } from "react-native-elements";
import { DefaultTheme } from "../../../theme/default-theme";
import MyLocationButton from "./my-location-button";

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

  handleLocationButtonPress = async () => {
    const location = await Location.getCurrentPositionAsync({});
    this.animateToRegion(
      {
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.006,
        longitudeDelta: 0.006,
      },
      200
    );
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
          mapPadding={{
            left: 5,
            right: 10,
          }}
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
