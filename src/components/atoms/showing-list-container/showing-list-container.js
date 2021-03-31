import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";
import { DefaultTheme } from "../../../theme/default-theme";

export default function ShowingListContainer({ show, children }) {
  const heightAnim = useRef(new Animated.Value(0)).current;

  const startFadeIn = () => {
    Animated.timing(heightAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const startFadeOut = () => {
    Animated.timing(heightAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (show) {
      startFadeIn();
    } else {
      startFadeOut();
    }
  }, [show]);

  return (
    <Animated.View
      style={{
        flex: 1,
        zIndex: 3,
        opacity: heightAnim,
        backgroundColor: DefaultTheme.palette.colors.screenBackground.main,
      }}
    >
      {children}
    </Animated.View>
  );
}
