import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useLocate } from "../components/hooks/locate-hooks";
import {
  PHOTO_DETAIL_SCREEN,
  PHOTO_VIEW_SCREEN,
  SOURCES_SCREEN,
  MONUMENTS_GALLERY_SCREEN,
  MONUMENT_DETAIL_SCREEN,
} from "./route-consts/monuments-detail-navigation-consts";
import StartTabs from "./tabs/start-tabs";
import MonumentGalleryScreen from "../screens/monument-gallary-screen/monument-gallery-screen";
import PhotoDetailScreen from "../screens/photo-detail-screen/photo-detail-screen";
import PhotoViewScreen from "../screens/photo-view-screen/photo-view-screen";
import MonumentDetailScreen from "../screens/monument-detail-screen/monument-detail-screen";
import SourcesScreen from "../screens/sources-screen/sources-screen";
import { DefaultTheme } from "../theme/default-theme";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { isIOS } from "react-native-elements/dist/helpers";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { Platform } from "react-native";

const Stack = createNativeStackNavigator();

const navigatorOptions = Platform.select({
  default: {},
});

export default function MainNavigator() {
  const { t } = useLocate();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="StartScreen"
        screenOptions={{
          headerStyle: {
            backgroundColor: DefaultTheme.palette.colors.primary.dark,
          },
          headerTintColor: "white",
          headerBackTitle: " ",
        }}
      >
        <Stack.Screen
          name="StartScreen"
          component={StartTabs}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={MONUMENTS_GALLERY_SCREEN}
          options={({ route }) => ({
            headerShown: true,
            title: route.params.title,
            gestureEnabled: true,
          })}
          component={MonumentGalleryScreen}
        />
        <Stack.Screen
          name={PHOTO_DETAIL_SCREEN}
          options={{
            headerShown: false,
          }}
          component={PhotoDetailScreen}
        />
        <Stack.Screen
          name={PHOTO_VIEW_SCREEN}
          options={{
            headerShown: false,
          }}
          component={PhotoViewScreen}
        />
        <Stack.Screen
          name={MONUMENT_DETAIL_SCREEN}
          options={{
            headerShown: false,
            gestureEnabled: true,
          }}
          component={MonumentDetailScreen}
        />
        <Stack.Screen
          name={SOURCES_SCREEN}
          options={{ title: t("sources"), gestureEnabled: true }}
          component={SourcesScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
