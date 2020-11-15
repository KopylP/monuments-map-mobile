import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";
import { DefaultTheme } from "../../../../../theme/default-theme";

export default function AnimatedHeader({ show }) {
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

  const height =  80;

  return (
    <Animated.View
      style={{
        width: "100%",
        height,
        justifyContent: "flex-end",
        transform: [
          {
            translateY: heightAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [-height, 0],
            }),
          },
        ],
        backgroundColor: DefaultTheme.pallete.colors.primary.main,
      }}
    >      
    </Animated.View>
  );
}
