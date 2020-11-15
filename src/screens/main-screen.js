import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MonumentsMapScreen, {
  mapTabOptions,
} from "./monuments/monuments-map-screen";
import { DefaultTheme } from "../theme/default-theme";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { useLocate } from "../components/hooks/locate-hooks";

const Tab = createBottomTabNavigator();

const getTabBarVisibility = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "";
  if (["PhotoView", "PhotoDetail"].includes(routeName)) {
    return false;
  }

  return true;
};

export default function MainScreen() {

  const { t, locale } = useLocate();

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
              tabBarLabel: t('map'),
              tabBarVisible: getTabBarVisibility(route),
            };
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
