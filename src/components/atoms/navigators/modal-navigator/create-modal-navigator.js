import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { Icon } from "react-native-elements";
import { DefaultTheme } from "../../../../theme/default-theme";

export default function CreateModalNavigator() {
  const Stack = createSharedElementStackNavigator();

  const Navigator = ({ children }) => {
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
