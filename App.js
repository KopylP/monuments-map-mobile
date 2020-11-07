import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { host } from "./src/config";
import AppContext from "./src/context/app-context";
import store from "./src/redux/store";
// import MapListScreen from "./src/screens/monuments/components/nested-screens/map-list-screen";
import MonumentsMapScreen from "./src/screens/monuments/monuments-map-screen";
import MonumentService from "./src/services/monument-service";
// enableScreens();

const Stack = createStackNavigator();

export default function App() {
  const monumentService = new MonumentService(host);

  return (
    <AppContext.Provider value={{ monumentService }}>
      <Provider store={store}>
        <View style={styles.container}>
          <NavigationContainer>
            {/* <Stack.Navigator>
              <Stack.Navigator>
                <Stack.Screen name="Map" component={} />
              </Stack.Navigator>
            </Stack.Navigator> */}
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
