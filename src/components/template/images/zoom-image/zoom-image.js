import React from "react";
import { PinchGestureHandler, State } from "react-native-gesture-handler";
import Animated, {
  Value,
  block,
  cond,
  eq,
  set,
  useCode,
} from "react-native-reanimated";

import {
  onGestureEvent,
  pinchActive,
  pinchBegan,
  timing,
  transformOrigin,
  translate,
  vec,
} from "react-native-redash";
import { Dimensions, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
  },
});

export default function ZoomImage({
  width,
  height,
  style,
  source,
  resizeMode = "cover",
}) {
  const state = new Value(State.UNDETERMINED);
  const scale = new Value(1);
  const focal = vec.createValue(0, 0);
  const origin = vec.createValue(0, 0);
  const adjustedFocal = vec.add({ x: -width / 2, y: -height / 2 }, focal);
  const zIndex = cond(eq(state, State.ACTIVE), 10, 1);
  const translation = vec.createValue(0, 0);

  const genstureHandler = onGestureEvent({
    state,
    scale: scale,
    focalX: focal.x,
    focalY: focal.y,
  });

  useCode(
    () =>
      block([
        cond(eq(state, State.BEGAN), vec.set(origin, adjustedFocal)),
        cond(
          eq(state, State.ACTIVE),
          vec.set(translation, vec.minus(vec.sub(origin, adjustedFocal)))
        ),
        cond(eq(state, State.END), [
            set(translation.x, timing({from: translation.x, to: 0})),
            set(translation.y, timing({from: translation.y, to: 0})),
            set(scale, timing({from: scale, to: 1})),
        ])
      ]),
    [focal, origin, state]
  );

  return (
    <Animated.View style={{ width: width, height: height }}>
      <PinchGestureHandler {...genstureHandler}>
        <Animated.View style={{ width, height }}>
          <Animated.Image
            style={[
              styles.image,
              {
                zIndex,
              },
              {
                transform: [
                  ...translate(translation),
                  ...transformOrigin(origin, { scale }),
                ],
              },
            ]}
            source={source}
            resizeMode={resizeMode}
          />
        </Animated.View>
      </PinchGestureHandler>
    </Animated.View>
  );
}
