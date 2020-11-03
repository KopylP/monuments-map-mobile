import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { host } from "./src/config";
import AppContext from "./src/context/app-context";
import store from "./src/redux/store";
import MonumentsMapScreen from "./src/screens/monuments/monuments-map-screen";
import MonumentsService from "./src/services/monuments-service";

export default function App() {

  const monumentsService = new MonumentsService(host);

  return (
    <AppContext.Provider value={{monumentsService}}>
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
