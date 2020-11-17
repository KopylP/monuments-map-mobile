import React from "react";
import { Platform } from "react-native";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { connect } from "react-redux";
import MonumentDetailScreen from "../../components/common/screens/monument-detail-screen/monument-detail-screen";
import {
  transitionEnd,
  transitionStart,
} from "../../redux/actions/transition-actions";
import MapListScreen from "./components/nested-screens/map-list-screen";
import useCancelablePromise from "@rodw95/use-cancelable-promise";
import timeout from "../../helpers/timeout-promise";
import MonumentGalleryScreen from "../../components/common/screens/monument-gallary-screen/monument-gallery-screen";
import { DefaultTheme } from "../../theme/default-theme";
import { Icon } from "react-native-elements";
import PhotoDetailScreen from "../../components/common/screens/photo-detail-screen/photo-detail-screen";
import PhotoViewScreen from "../../components/common/screens/photo-view-screen/photo-view-screen";
import FilterScreen from "./components/nested-screens/filter-screen/filter-screen";

const Stack = createSharedElementStackNavigator();

const MonumentsMapScreen = ({ transitionStart, transitionEnd }) => {
  const makeCancelable = useCancelablePromise();

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
        options={{ title: "List" }}
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
        component={FilterScreen}/>
      <Stack.Screen
        name="Detail"
        options={{
          headerShown: false,
        }}
        component={MonumentDetailScreen}
        listeners={{
          transitionStart: (e) => {
            if (e.data.closing) {
              transitionStart();
              makeCancelable(timeout(300)).then(() => {
                transitionEnd();
              });
            }
          },
        }}
        sharedElementsConfig={(route, otherRoute, showing) => {
          const { shareId } = route.params;
          if (route.name === "Detail" && otherRoute.name === "Gallery")
            return [{}];
          if (route.name === "Detail" && (showing || shareId.includes("map"))) {
            if (Platform.OS === "ios") {
              return [
                {
                  id: `image-${shareId}`,
                  animation: "fade",
                  resize: "none",
                  align: "center-center",
                },
              ];
            }
          }
        }}
      />
    </Stack.Navigator>
  );
};

const bindDispatchToProps = { transitionStart, transitionEnd };

export default connect(null, bindDispatchToProps)(MonumentsMapScreen);

export const mapTabOptions = {
  tabBarIcon: ({ color, size }) => (
    <Icon name="map" type="font-awesome" size={size} color={color} />
  ),
};
