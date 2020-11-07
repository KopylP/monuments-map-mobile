import React from "react";
import { Platform } from "react-native";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import MonumentDetailScreen from "../../components/common/screens/monument-detail-screen";
import MapListScreen from "./components/nested-screens/map-list-screen";

const Stack = createSharedElementStackNavigator();

const MonumentsMapScreen = () => {
  return (
    <Stack.Navigator
      mode="modal"
      screenOptions={{
        cardShadowEnabled: false,
        useNativeDrawer: true,
        gestureEnabled: false,
      }}
      headerMode="none"
      
    >
      <Stack.Screen
        name="List"
        options={{ title: "List" }}
        component={MapListScreen}
      />
      <Stack.Screen
        name="Detail"
        component={MonumentDetailScreen}
        // listeners={{
        //   transitionStart: () => console.log("start"),
        //   transitionEnd: (e) => console.log(e)
        // }}
        sharedElementsConfig={(route, otherRoute, showing) => {
          if (route.name === "Detail") {
            if (Platform.OS === "ios" || showing) {
            const { shareId } = route.params;
            return [
              {
                id: `image-${shareId}`,
                animation: "fade",
                resize: "none",
                align: "center-center",
              },
            ];
          }
          }
        }}
      />
    </Stack.Navigator>
  );
};

export default MonumentsMapScreen;
