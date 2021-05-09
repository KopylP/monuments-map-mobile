import React from "react";
import {
  MONUMENTS_GALLERY_SCREEN,
  MONUMENT_DETAIL_SCREEN,
  PHOTO_DETAIL_SCREEN,
  PHOTO_VIEW_SCREEN,
  SOURCES_SCREEN,
} from "../../route-consts/monuments-detail-navigation-consts";
import MonumentGalleryScreen from "../../../screens/monument-gallary-screen/monument-gallery-screen";
import PhotoDetailScreen from "../../../screens/photo-detail-screen/photo-detail-screen";
import PhotoViewScreen from "../../../screens/photo-view-screen/photo-view-screen";
import { useLocate } from "../../../components/hooks/locate-hooks";
import SourcesScreen from "../../../screens/sources-screen/sources-screen";
import createApplicationNativeStackNavigator from "../application-native-stack-navigator";
import MonumentDetailScreen from "../../../screens/monument-detail-screen/monument-detail-screen";

export default function CreateMonumentDetailNavigator() {
  const Stack = createApplicationNativeStackNavigator();

  const Navigator = ({ children }) => {
    const { t } = useLocate();

    return (
      <Stack.Navigator>
        {children}
        <Stack.Screen
          name={MONUMENTS_GALLERY_SCREEN}
          options={({ route }) => ({
            headerShown: true,
            title: route.params.title,
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
          }}
          component={MonumentDetailScreen}
        />
        <Stack.Screen
          name={SOURCES_SCREEN}
          options={{ title: t("sources") }}
          component={SourcesScreen}
        />
      </Stack.Navigator>
    );
  };

  const Screen = Stack.Screen;

  return {
    Navigator,
    Screen,
  };
}
