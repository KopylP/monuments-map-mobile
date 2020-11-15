import React from "react";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { host } from "./src/config";
import AppContext from "./src/context/app-context";
import store from "./src/redux/store";
import MonumentService from "./src/services/monument-service";
import GeocoderService from "./src/services/geocoder-service";
import { enableScreens } from "react-native-screens";
import MainScreen from "./src/screens/main-screen";
import LocateProvider from "./src/context/locate-context";
import { useLocate } from "./src/components/hooks/locate-hooks";
import { SafeAreaView } from "react-native-safe-area-context";
enableScreens();

function App() {

  const { culture: { code } } = useLocate();

  const monumentService = new MonumentService(host, code);
  const geocoderService = new GeocoderService(code);

  return (
      <AppContext.Provider value={{ monumentService, geocoderService }}>
        <Provider store={store}>
          <SafeAreaView style={styles.container}>
            <MainScreen />
          </SafeAreaView>
        </Provider>
      </AppContext.Provider>
  );
}

export default (props) => (
  <LocateProvider>
    <App {...props} />
  </LocateProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
