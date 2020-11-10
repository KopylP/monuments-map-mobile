import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { host } from "./src/config";
import AppContext from "./src/context/app-context";
import store from "./src/redux/store";
import MonumentsMapScreen from "./src/screens/monuments/monuments-map-screen";
import MonumentService from "./src/services/monument-service";
import GeocoderService from "./src/services/geocoder-service";
import { enableScreens } from "react-native-screens";
enableScreens();

const Stack = createStackNavigator();

export default function App() {
  const monumentService = new MonumentService(host);
  const geocoderService = new GeocoderService("uk-UA");

  return (
    <AppContext.Provider value={{ monumentService, geocoderService }}>
      <Provider store={store}>
        <View style={styles.container}>
          <NavigationContainer>
            <MonumentsMapScreen />
          </NavigationContainer>
        </View>
      </Provider>
    </AppContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
