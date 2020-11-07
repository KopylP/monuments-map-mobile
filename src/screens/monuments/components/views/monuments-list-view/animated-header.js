import React, { useEffect, useRef } from "react";
import { Animated, Platform } from "react-native";
import SearchBarIOS from "../../../../../components/template/search-bar/search-bar-ios";
import SearchBarAndroid from "../../../../../components/template/search-bar/search-bar-android";
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

  const height = Platform.OS === "android" ? 170 : 150;

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
      { Platform.OS === "ios" && <SearchBarIOS style={{margin: 10}} placeholder="Пошук..."/> }
      { Platform.OS === "android" && <SearchBarAndroid style={{marginHorizontal: 20, marginBottom: 10,}} placeholder="Пошук..."/> }
      
    </Animated.View>
  );
}
