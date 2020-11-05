import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { host } from "./src/config";
import AppContext from "./src/context/app-context";
import store from "./src/redux/store";
import MonumentsMapScreen from "./src/screens/monuments/monuments-map-screen";
import MonumentService from "./src/services/monument-service";

export default function App() {

  const monumentService = new MonumentService(host);

  return (
    <AppContext.Provider value={{monumentService}}>
    <Provider store={store}>
      <View style={styles.container}>
        <MonumentsMapScreen />
      </View>
    </Provider>
    </AppContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
