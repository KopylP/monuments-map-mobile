import { useSafeAreaInsets } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import React from "react";
import { DefaultTheme } from "../../../theme/default-theme";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";

export default function createApplicationNativeStackNavigator() {
  const Stack = createNativeStackNavigator();

  const Navigator = ({ children, initialRouteName }) => {
    return (
      <Stack.Navigator
        initialRouteName={initialRouteName}
        screenOptions={{
          // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerStyle: {
            backgroundColor: DefaultTheme.palette.colors.primary.dark,
          },
          headerTintColor: "white",
          headerBackTitle: " ",
          stackAnimation: "slide_from_right",
        }}
      >
        {children}
      </Stack.Navigator>
    );
  };

  const Screen = Stack.Screen;

  return {
    Navigator,
    Screen,
  };
}
