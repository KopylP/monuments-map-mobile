import React from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { connect } from "react-redux";
import {
  transitionEnd,
  transitionStart,
} from "../../redux/actions/transition-actions";
import MonumentsMapScreen from "../../screens/monuments-map-screen";
import useCancelablePromise from "@rodw95/use-cancelable-promise";
import MonumentGalleryScreen from "../../screens/monument-gallary-screen/monument-gallery-screen";
import { DefaultTheme } from "../../theme/default-theme";
import { Icon } from "react-native-elements";
import PhotoDetailScreen from "../../screens/photo-detail-screen/photo-detail-screen";
import PhotoViewScreen from "../../screens/photo-view-screen/photo-view-screen";
import FilterScreen from "../../screens/monuments-map-filter-screen";
import { useLocate } from "../../components/hooks/locate-hooks";
import monumentDetailScreenOptions from "../../screens/monument-detail-screen/monument-detail-screen.options";
import SourcesScreen from "../../screens/sources-screen/sources-sreen";
import { enableDialog } from "../../redux/actions/selected-monument-actions";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Stack = createSharedElementStackNavigator();

const MonumentsMapNavigation = ({
  transitionStart,
  transitionEnd,
  enableDialog,
}) => {
  const makeCancelable = useCancelablePromise();
  const { t } = useLocate();
  const { top } = useSafeAreaInsets();

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
          backgroundColor: DefaultTheme.palette.colors.primary.dark,
          height: 60 + top,
        },
        headerTitleStyle: {
          fontWeight: "400",
          fontSize: 16,
        },
        headerLeft: ({ onPress }) => {
          return (
            <Icon type="ionicon" name="md-arrow-back" size={30} color="white" onPress={onPress}/>
          );
        },
        headerLeftContainerStyle: {
          left: 25
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
        component={MonumentsMapScreen}
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

export default connect(null, bindDispatchToProps)(MonumentsMapNavigation);

export const mapTabOptions = {
  tabBarIcon: ({ color, size }) => (
    <Icon name="landmark" type="font-awesome-5" size={size} color={color} />
  ),
};
