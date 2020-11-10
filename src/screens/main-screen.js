import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MonumentsMapScreen, { mapTabOptions } from "./monuments/monuments-map-screen";
import { DefaultTheme } from "../theme/default-theme";

const Tab = createBottomTabNavigator();

export default function MainScreen() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Map"
        
        tabBarOptions={{
          activeTintColor: DefaultTheme.pallete.colors.primary.main,
          tabStyle: {
            paddingVertical: 5,
            backgroundColor: "white",
            zIndex: 0,
          },
          style: {
              zIndex: 0
          },
        }}
      >
        <Tab.Screen name="Map" component={MonumentsMapScreen} options={{
            ...mapTabOptions,
            tabBarLabel: "Map"
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
