import React, { useRef } from "react";
import { Animated, View, Text, SafeAreaView } from "react-native";

export default function AnimatedHeaderContainer({
  title,
  children,
  style = {},
  rootContainerStyle = {},
}) {
  const scrollY = useRef(new Animated.Value(0)).current;

  const HEADER_SCROLL_DISTANCE = 46;
  const translateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [60, 25],
    extrapolateRight: "clamp",
  });

  const translateX = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [20, -50],
    extrapolate: "clamp",
  });

  const scale = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 0.7],
    extrapolate: "clamp",
  });

  return (
    <View style={[{ flex: 1 }, rootContainerStyle]}>
      <Animated.View
        style={{
          transform: [{ translateY }, { translateX }, { scale }],
          zIndex: 2,
        }}
      >
        <Text
          style={{
            fontSize: 34,
            fontWeight: "700",
          }}
        >
          {title}
        </Text>
      </Animated.View>
      <SafeAreaView style={{ marginTop: 32, flex: 1 }}>
        <Animated.ScrollView
          contentContainerStyle={[{ paddingTop: 46 }, style]}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true }
          )}
        >
          {children}
        </Animated.ScrollView>
      </SafeAreaView>
    </View>
  );
}
