import MonumentMapScreen from "../../../screens/monument-map-screen";
import CreateApplicationNativeStackNavigator from "../../navigators/application-native-stack-navigator/application-native-stack-navigator";
import { MONUMENTS_MAP_SCREEN } from "../../route-consts/monuments-map-navigation-consts";
import React, { memo } from "react";

function MonumentMapStack() {
  const Stack = CreateApplicationNativeStackNavigator(); // TODO Android change to StackNavigator

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
