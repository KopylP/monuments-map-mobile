import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MonumentsMapScreen, {
  mapTabOptions,
} from "./monuments/monuments-map-screen";
import { DefaultTheme } from "../theme/default-theme";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { useLocate } from "../components/hooks/locate-hooks";
import AboutAppScreen, { aboutAppTabOptions } from "./about-app/about-app-screen";

const Tab = createBottomTabNavigator();

const getTabBarVisibility = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "";
  if (["PhotoView", "PhotoDetail", "Sources"].includes(routeName)) {
    return false;
  }

  return true;
};

export default function MainScreen() {
  const { t } = useLocate();

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Map"
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
        <Tab.Screen
          name="Map"
          component={MonumentsMapScreen}
          options={({ route }) => {
            return {
              ...mapTabOptions,
              tabBarLabel: t("Monuments"),
              tabBarVisible: getTabBarVisibility(route),
            };
          }}
        />
        <Tab.Screen name="AboutApp"
        component={AboutAppScreen}
        options={{
          ...aboutAppTabOptions,
          tabBarLabel: t("About app"),
        }}>

        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
