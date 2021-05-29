import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { useLocate } from "../../../components/hooks/locate-hooks";
import AboutAppScreen from "../../../screens/about-app-screen";
import CategoryScreen from "../../../screens/category-screen/category-screen";
import MonumentMapScreen from "../../../screens/monument-map-screen";
import { DefaultTheme } from "../../../theme/default-theme";

export default function StartTabs() {
  const Tab = createBottomTabNavigator();

  const { t } = useLocate();

  return (
    <Tab.Navigator
      initialRouteName="CategoryTab"
      tabBarOptions={{
        tabStyle: {
          paddingVertical: 2,
        },
        activeTintColor: DefaultTheme.palette.colors.primary.dark,
      }}
    >
      <Tab.Screen
        name="MapTab"
        component={MonumentMapScreen}
        options={{
          tabBarLabel: t("Monuments"),
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="landmark"
              type="font-awesome-5"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="CategoryTab"
        component={CategoryScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" type="font-awesome" size={size} color={color} />
          ),
          tabBarLabel: t("Home"),
        }}
      />
      <Tab.Screen
        name="AboutAppTab"
        component={AboutAppScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="info" type="font-awesome" size={size} color={color} />
          ),
          tabBarLabel: t("About app"),
        }}
      />
    </Tab.Navigator>
  );
}
