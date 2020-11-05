import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";
import SearchBarIOS from "../../../../../components/template/search-bar/search-bar-ios";
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

  return (
    <Animated.View
      style={{
        width: "100%",
        height: 150,
        justifyContent: "flex-end",
        transform: [
          {
            translateY: heightAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [-150, 0],
            }),
          },
        ],
        backgroundColor: DefaultTheme.pallete.colors.primary.main,
      }}
    >
      <SearchBarIOS style={{margin: 10}} placeholder="Пошук..."/>
    </Animated.View>
  );
}
