import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { Icon } from "react-native-elements";
import { DefaultTheme } from "../../../theme/default-theme";

export default function CreateModalNavigator() {
  const Stack = createSharedElementStackNavigator();

  const Navigator = ({ children, initialRouteName }) => {
    const { top } = useSafeAreaInsets();

    return (
      <Stack.Navigator
        mode="modal"
        initialRouteName={initialRouteName}
        screenOptions={{
          headerBackTitle: " ",
          cardShadowEnabled: false,
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
              <Icon
                type="ionicon"
                name="md-arrow-back"
                size={30}
                color="white"
                onPress={onPress}
              />
            );
          },
          headerLeftContainerStyle: {
            left: 25,
          },
          transitionSpec: {
            open: {
              animation: "timing",
              config: {
                duration: 120,
              },
            },
            close: {
              animation: "timing",
              config: {
                duration: 120,
              },
            },
          },
        }}
      >
        {children}
      </Stack.Navigator>
    );
  };

  const Screen = Stack.Screen;

  return {
    Navigator,
    Screen,
  };
}
