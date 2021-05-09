import MonumentMapScreen from "../../../screens/monument-map-screen";
import { MONUMENTS_MAP_SCREEN } from "../../route-consts/monuments-map-navigation-consts";
import React, { memo } from "react";
import CreateMonumentDetailNavigator from "../../navigators/monument-details-navigator/create-monument-detail-navigator";

function MonumentMapStack() {
  const Stack = CreateMonumentDetailNavigator(); // TODO Android change to StackNavigator

  return (
    <Stack.Navigator initialRouteName={MONUMENTS_MAP_SCREEN}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        component={MonumentMapScreen}
        name={MONUMENTS_MAP_SCREEN}
      />
    </Stack.Navigator>
  );
}

export default memo(MonumentMapStack);
