import React, { useRef } from "react";
import { Platform } from "react-native";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { connect } from "react-redux";
import MonumentDetailScreen from "../../components/common/screens/monument-detail-screen";
import { transitionEnd, transitionStart } from "../../redux/actions/transition-actions";
import MapListScreen from "./components/nested-screens/map-list-screen";

const Stack = createSharedElementStackNavigator();

const MonumentsMapScreen = ({ transitionStart, transitionEnd  }) => {

  return (
    <Stack.Navigator
      mode="modal"
      screenOptions={{
        cardShadowEnabled: false,
        useNativeDrawer: true,
        gestureEnabled: false,
        transitionSpec: {
          open: {
            animation: "timing",
            config: {
              duration: 200,
            }
          },
          close: {
            animation: "timing",
            config: {
              duration: 200,
            }
          }
        },
      }}
      headerMode="none"
    >
      <Stack.Screen
        name="List"
        options={{ title: "List" }}
        component={MapListScreen}
      />
      <Stack.Screen
        name="Detail"
        component={MonumentDetailScreen}
        listeners={{
          transitionStart: (e) => {
            if (e.data.closing) {
              transitionStart();
              setTimeout(() => {
                transitionEnd();
              }, 300);
            }
          },
        }}
        sharedElementsConfig={(route, otherRoute, showing) => {
          const { shareId } = route.params;
          if (route.name === "Detail" && (showing || shareId.includes("map"))) {
            if (Platform.OS === "ios" || showing) {
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
