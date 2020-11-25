import React from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { connect } from "react-redux";
import {
  transitionEnd,
  transitionStart,
} from "../../redux/actions/transition-actions";
import MapListScreen from "./components/nested-screens/map-list-screen";
import useCancelablePromise from "@rodw95/use-cancelable-promise";
import MonumentGalleryScreen from "../../components/common/screens/monument-gallary-screen/monument-gallery-screen";
import { DefaultTheme } from "../../theme/default-theme";
import { Icon } from "react-native-elements";
import PhotoDetailScreen from "../../components/common/screens/photo-detail-screen/photo-detail-screen";
import PhotoViewScreen from "../../components/common/screens/photo-view-screen/photo-view-screen";
import FilterScreen from "./components/nested-screens/filter-screen/filter-screen";
import { useLocate } from "../../components/hooks/locate-hooks";
import monumentDetailScreenOptions from "../../components/common/screens/monument-detail-screen/monument-detail-screen.options";
import SourcesScreen from "../../components/common/screens/sources-screen/sources-sreen";
import { enableDialog } from "../../redux/actions/selected-monument-actions";

const Stack = createSharedElementStackNavigator();

const MonumentsMapScreen = ({ transitionStart, transitionEnd, enableDialog }) => {
  const makeCancelable = useCancelablePromise();
  const { t } = useLocate();

  return (
    <Stack.Navigator
      mode="modal"
      screenOptions={{
        headerBackTitle: " ",
        cardShadowEnabled: false,
        useNativeDrawer: true,
        headerTintColor: "white",
        gestureEnabled: false,
        headerStyle: {
          backgroundColor: DefaultTheme.pallete.colors.primary.main,
        },
        transitionSpec: {
          open: {
            animation: "timing",
            config: {
              duration: 150,
            },
          },
          close: {
            animation: "timing",
            config: {
              duration: 150,
            },
          },
        },
      }}
    >
      <Stack.Screen
        name="List"
        component={MapListScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Gallery"
        options={({ route }) => ({
          headerShown: true,
          title: route.params.title,
        })}
        component={MonumentGalleryScreen}
      />
      <Stack.Screen
        name="PhotoDetail"
        options={{
          headerShown: false,
        }}
        component={PhotoDetailScreen}
      />
      <Stack.Screen
        name="PhotoView"
        options={{
          headerShown: false,
        }}
        component={PhotoViewScreen}
      />
      <Stack.Screen
        name="Filters"
        options={{
          title: t("Filters"),
        }}
        component={FilterScreen}
      />
      <Stack.Screen
        {...monumentDetailScreenOptions(
          makeCancelable,
          transitionStart,
          transitionEnd,
          enableDialog
        )}
      />
      <Stack.Screen
        name="Sources"
        options={{ title: t("sources") }}
        component={SourcesScreen}
      />
    </Stack.Navigator>
  );
};

const bindDispatchToProps = { transitionStart, transitionEnd, enableDialog };

export default connect(null, bindDispatchToProps)(MonumentsMapScreen);

export const mapTabOptions = {
  tabBarIcon: ({ color, size }) => (
    <Icon name="map" type="font-awesome" size={size} color={color} />
  ),
};
