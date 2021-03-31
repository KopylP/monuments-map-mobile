import React from "react";
import { connect } from "react-redux";
import {
  transitionEnd,
  transitionStart,
} from "../../redux/actions/transition-actions";
import MonumentsMapScreen from "../../screens/monuments-map-screen";
import useCancelablePromise from "@rodw95/use-cancelable-promise";
import MonumentGalleryScreen from "../../screens/monument-gallary-screen/monument-gallery-screen";
import { Icon } from "react-native-elements";
import PhotoDetailScreen from "../../screens/photo-detail-screen/photo-detail-screen";
import PhotoViewScreen from "../../screens/photo-view-screen/photo-view-screen";
import FilterScreen from "../../screens/monuments-map-filter-screen";
import { useLocate } from "../../components/hooks/locate-hooks";
import monumentDetailScreenOptions from "../../screens/monument-detail-screen/monument-detail-screen.options";
import SourcesScreen from "../../screens/sources-screen/sources-screen";
import { enableDialog } from "../../redux/actions/selected-monument-actions";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  FILTER_SCREEN,
  MONUMENTS_GALLERY_SCREEN,
  MONUMENTS_MAP_SCREEN,
  PHOTO_DETAIL_SCREEN,
  PHOTO_VIEW_SCREEN,
  SOURCES_SCREEN,
} from "../route-consts/monuments-map-navigation-consts";
import CreateModalNavigator from "../../components/atoms/navigators/modal-navigator/create-modal-navigator";

const Stack = CreateModalNavigator();

const MonumentsMapNavigation = ({
  transitionStart,
  transitionEnd,
  enableDialog,
}) => {
  const makeCancelable = useCancelablePromise();
  const { t } = useLocate();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={MONUMENTS_MAP_SCREEN}
        component={MonumentsMapScreen}
        options={{
          headerShown: false,
        }}
      />
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
        name={FILTER_SCREEN}
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
        name={SOURCES_SCREEN}
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
