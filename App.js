import React from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import { host } from "./src/config";
import AppContext from "./src/context/app-context";
import store from "./src/redux/store";
import MonumentService from "./src/services/monument-service";
import GeocoderService from "./src/services/geocoder-service";
import { enableScreens } from "react-native-screens";
import LocateProvider from "./src/context/locate-context";
import { useLocate } from "./src/components/hooks/locate-hooks";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ModalSwitch from "./src/components/modal/modal-switch";
import MainNavigation from "./src/navigations/main-navigation/main-navigation";
import { logApplicationEvent } from "./src/helpers/application-analytics";
enableScreens();

function App() {
  const { culture } = useLocate();

  const monumentService = new MonumentService(host, culture.code);
  const geocoderService = new GeocoderService(culture.code);

  logApplicationEvent("Culture", culture);

  return (
    <AppContext.Provider value={{ monumentService, geocoderService }}>
      <Provider store={store}>
        <SafeAreaProvider>
          <StatusBar translucent backgroundColor="transparent"/>
          <ModalSwitch />
          <MainNavigation />
        </SafeAreaProvider>
      </Provider>
    </AppContext.Provider>
  );
}

export default (props) => (
  <LocateProvider>
    <App {...props} />
  </LocateProvider>
);

