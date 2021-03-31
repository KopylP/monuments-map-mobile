import React, { useEffect, useRef } from "react";
import { Animated, View } from "react-native";
import ShadowButton from "../shadow-button/shadow-button";

export default function FadeShadowButton(props) {
  const { isShowInitial, bottom, duration, show } = props;
  const fadeAnim = useRef(new Animated.Value(isShowInitial ? 1 : 0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: duration,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: duration,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (show) {
      fadeIn();
    } else {
      fadeOut();
    }
  }, [show]);

  const translateY = fadeAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [bottom * 3, 0],
  });

  return (
    <Animated.View
      style={{
        position: "absolute",
        bottom,
        alignSelf: "center",
        transform: [
          {
            translateY,
          },
        ],
      }}
    >
      <ShadowButton {...props} />
    </Animated.View>
  );
}
