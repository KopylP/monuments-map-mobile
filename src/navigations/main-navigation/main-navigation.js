import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MonumentsMapNavigation from "../monuments-map-navigation";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { useLocate } from "../../components/hooks/locate-hooks";
import AboutAppScreen from "../../screens/about-app-screen";
import { aboutAppTabOptions } from "../../screens/about-app-screen/about-app-screen";
import { mapTabOptions } from "../monuments-map-navigation/monuments-map-navigation";
import {
  PHOTO_DETAIL_SCREEN,
  PHOTO_VIEW_SCREEN,
  SOURCES_SCREEN,
} from "../route-consts/monuments-detail-navigation-consts";
import CreateApplicationBottomTabNavigator from "../navigators/application-bottom-tab-navigator";

const Tab = CreateApplicationBottomTabNavigator();

const getTabBarVisibility = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "";
  if (
    [PHOTO_VIEW_SCREEN, PHOTO_DETAIL_SCREEN, SOURCES_SCREEN].includes(routeName)
  ) {
    return false;
  }

  return true;
};

export default function MainNavigation() {
  const { t } = useLocate();

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Map">
        <Tab.Screen
          name="Map"
          component={MonumentsMapNavigation}
          options={({ route }) => {
            return {
              ...mapTabOptions,
              tabBarLabel: t("Monuments"),
              tabBarVisible: getTabBarVisibility(route),
            };
          }}
        />
        <Tab.Screen
          name="AboutApp"
          component={AboutAppScreen}
          options={{
            ...aboutAppTabOptions,
            tabBarLabel: t("About app"),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
