import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DefaultTheme } from "../../../theme/default-theme";

export default function CreateApplicationBottomTabNavigator() {
  const Tab = createBottomTabNavigator();

  const Navigator = ({ children, initialRouteName }) => {
    return (
      <Tab.Navigator
        initialRouteName={initialRouteName}
        tabBarOptions={{
          activeTintColor: DefaultTheme.palette.colors.primary.main,
          tabStyle: {
            paddingVertical: 5,
            backgroundColor: "white",
            zIndex: 0,
          },
          style: {
            zIndex: 0,
          },
        }}
      >
        {children}
      </Tab.Navigator>
    );
  };

  const Screen = Tab.Screen;

  return { Navigator, Screen };
}
