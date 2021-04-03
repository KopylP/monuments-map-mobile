import { BlurView } from 'expo-blur';
import React, { memo, useEffect, useRef } from "react";
import { View } from 'react-native';
import { Animated } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { DefaultTheme } from "../../../theme/default-theme";

function OutgoingHeader({ show }) {
  const heightAnim = useRef(new Animated.Value(0)).current;
  const { top } = useSafeAreaInsets();

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

  const height = 70 + top;

  return (
    <Animated.View
      style={{
        width: "100%",
        height,
        position: "absolute",
        zIndex: 5,
        justifyContent: "flex-end",
        transform: [
          {
            translateY: heightAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [-height, 0],
            }),
          },
        ],
      }}
    >
      <BlurView
        intensity={100}
        style={{flex: 1}}
      >
      <View style={{backgroundColor: DefaultTheme.palette.colors.primary.dark, flex: 1, opacity: 0.9}}></View>
      </BlurView>
    </Animated.View>
  );
}

export default memo(OutgoingHeader);
