import React, { useRef } from "react";
import { Animated, ActivityIndicator } from "react-native";
import { PinchGestureHandler, State } from "react-native-gesture-handler";

export default function ZoomImage({
  width,
  height,
  source,
  onLoadEnd = (p) => p,
}) {
  const scale = useRef(new Animated.Value(1)).current;
  const translateX = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;

  const onZoomEvent = Animated.event(
    [
      {
        nativeEvent: {
          scale,
          focalX: translateX,
          focalY: translateY,
        },
      },
    ],
    {
      useNativeDriver: true,
    }
  );

  const onZoomStateChange = (event) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
      Animated.spring(translateX, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
      Animated.spring(translateY, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <PinchGestureHandler
      onGestureEvent={onZoomEvent}
      onHandlerStateChange={onZoomStateChange}
    >
      <Animated.Image
        source={source}
        onLoadEnd={onLoadEnd}
        style={{
          width: width,
          height: height,
          zIndex: 0,
          transform: [{ scale }],
        }}
        resizeMode="contain"
      />
    </PinchGestureHandler>
  );
}
