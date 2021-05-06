import { useSafeAreaInsets } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import React from "react";
import { DefaultTheme } from "../../../theme/default-theme";
import { createStackNavigator } from "@react-navigation/stack";

export default function CreateApplicationNativeStackNavigator() {
  const Stack = createNativeStackNavigator();

  const Navigator = ({ children, initialRouteName }) => {
    //   const { top } = useSafeAreaInsets();

    return (
      <Stack.Navigator
        initialRouteName={initialRouteName}
        screenOptions={{
          statusBarAnimation: "none",
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
