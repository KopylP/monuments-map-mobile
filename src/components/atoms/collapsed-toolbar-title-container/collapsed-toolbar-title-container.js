import React, { memo, useRef } from "react";
import { StyleSheet, Text, Animated, View, Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { DefaultTheme } from "../../../theme/default-theme";
import BackButton from "../buttons/back-button/back-button";

function CollapsedToolbarTitleFlatListContainer({
  title,
  headerBackground = DefaultTheme.palette.colors.screenBackground.main,
  onBack = (p) => p,
  titleContainerHeight,
  showBackButton = false,
  titleColor = "black",
  children,
}) {
  const scrollY = useRef(new Animated.Value(0)).current;
  const scrollRef = useRef();

  const { top, bottom } = useSafeAreaInsets();

  const HEADER_MIN_HEIGHT = 60 + top;

  titleContainerHeight = titleContainerHeight || HEADER_MIN_HEIGHT + 20;

  const headerScrollDistance = titleContainerHeight - HEADER_MIN_HEIGHT;

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, headerScrollDistance],
    outputRange: [0, -headerScrollDistance],
    extrapolate: "clamp",
  });

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, headerScrollDistance - 20, headerScrollDistance],
    outputRange: [0, 0, 1],
    extrapolate: "clamp",
  });

  const titleOpacity = scrollY.interpolate({
    inputRange: [0, headerScrollDistance + 20, headerScrollDistance + 40],
    outputRange: [0, 0, 1],
    extrapolate: "clamp",
  });

  const iconViewTop = 10 + top;
  const topBarHeight = 50 + top;

  return (
    <View
      style={{
        ...StyleSheet.absoluteFill,
        backgroundColor: DefaultTheme.palette.colors.screenBackground.main,
      }}
    >
      <Animated.ScrollView
        ref={scrollRef}
        contentContainerStyle={{
          paddingTop: titleContainerHeight,
          paddingBottom: bottom,
        }}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
      >
        {children}
      </Animated.ScrollView>
      <Animated.View
        style={[
          styles.header,
          { height: titleContainerHeight },
          {
            transform: [{ translateY: headerTranslateY }, { scale: 1 }],
            opacity: headerOpacity,
          },
          { backgroundColor: headerBackground },
        ]}
        pointerEvents="none"
      ></Animated.View>
      <Animated.View
        style={[
          styles.topBar,
          {
            opacity: titleOpacity,
            height: topBarHeight,
          },
        ]}
        pointerEvents="none"
      >
        <Text
          style={[styles.title, { marginTop: top, color: titleColor }]}
          numberOfLines={1}
        >
          {title}
        </Text>
      </Animated.View>
      {showBackButton && (
        <BackButton
          onPress={onBack}
          containerStyle={[styles.iconView, { top: iconViewTop }]}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    overflow: "hidden",
  },
  headerBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    overflow: "hidden",
    width: null,
    alignSelf: "center",
  },
  topBar: {
    marginTop: 5,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  title: {
    fontSize: 16,
    maxWidth: "62%",
  },
  iconView: {
    position: "absolute",
    left: 15,
  },
});

export default memo(CollapsedToolbarTitleFlatListContainer);
