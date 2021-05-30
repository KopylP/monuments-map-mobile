import {
  BottomTabBar,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";
import React from "react";
import { StyleSheet } from "react-native";
import { isIOS } from "react-native-elements/dist/helpers";
import { Icon } from "react-native-elements/dist/icons/Icon";
import TabBarIOS from "../../../components/atoms/tab-bar-ios";
import { useLocate } from "../../../components/hooks/locate-hooks";
import AboutAppScreen from "../../../screens/about-app-screen";
import CategoryScreen from "../../../screens/category-screen/category-screen";
import MonumentMapScreen from "../../../screens/monument-map-screen";
import { DefaultTheme } from "../../../theme/default-theme";

export default function StartTabs() {
  const Tab = createBottomTabNavigator();

  const { t } = useLocate();

  const tabBar = isIOS
    ? {
        tabBar: (props) => <TabBarIOS {...props} />,
      }
    : {};

  return (
    <Tab.Navigator
      initialRouteName="CategoryTab"
      tabBarOptions={{
        tabStyle: {
          paddingVertical: 2,
        },
        style: isIOS ? styles.tabBarStyleIOS : styles.tabBarStyleAndroid,
        activeTintColor: DefaultTheme.palette.colors.primary.dark,
      }}
      {...tabBar}
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

const styles = StyleSheet.create({
  tabBarStyleIOS: {
    backgroundColor: "transparent",
  },
  tabBarStyleAndroid: {},
});
