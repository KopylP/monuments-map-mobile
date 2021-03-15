import React from "react";
import { StyleSheet, View } from "react-native";
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
import { DefaultTheme } from "./src/theme/default-theme";
import { StatusBar } from "expo-status-bar";
import { isIOS } from "./src/helpers/platform-helpers";
import { logEvent } from "expo-firebase-analytics";
import SafeArea from "./src/components/common/safe-area/safe-area";
enableScreens();

function App() {
  const { culture } = useLocate();

  const monumentService = new MonumentService(host, culture.code);
  const geocoderService = new GeocoderService(culture.code);

  logEvent("Culture", culture);

  return (
    <AppContext.Provider value={{ monumentService, geocoderService }}>
      <Provider store={store}>
        <SafeArea>
          <MainScreen />
        </SafeArea>
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
  statusBar: {
    flex: 0,
    backgroundColor: DefaultTheme.palette.colors.primary.dark,
  },
});
