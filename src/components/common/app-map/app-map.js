import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MapView from "react-native-maps";
import { defaultMapCenter } from "../../../config";
import MyLocationButton from "./my-location-button";
import * as Location from "expo-location";

class AppMap extends Component {
  state = {
    userAccessLocation: false,
    location: null,
  };

  locationSubscription = null;

  handleWatch = (location) => {
    this.setState({location});
  };

  configureLocation = () => {
    Location.watchPositionAsync(
      {
        timeInterval: 1000,
      },
      this.handleWatch
    ).then(s => this.locationSubscription = s);
  };

  disableLocation = () => {
    if (this.locationSubscription) {
      this.locationSubscription.remove();
    }
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

  handleLocationButtonPress = () => {
    const { location } = this.state;
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
  };

  componentDidMount() {
    this.configureLocation();
  }

  componentWillUnmount() {
    this.disableLocation();
  }

  render() {
    const { children } = this.props;
    const { userAccessLocation, location } = this.state;
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
          showsMyLocationButton={userAccessLocation}
          style={[StyleSheet.absoluteFill]}
        >
          {children}
        </MapView>
        {location && <MyLocationButton onPress={this.handleLocationButtonPress} />}
      </View>
    );
  }
}

export default AppMap;
