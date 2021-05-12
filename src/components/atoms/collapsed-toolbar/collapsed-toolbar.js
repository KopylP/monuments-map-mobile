import React, { memo, useRef } from "react";
import {
  StyleSheet,
  Text,
  Animated,
  View,
  Platform,
  Image,
} from "react-native";
import FastImage from "react-native-fast-image";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { DefaultTheme } from "../../../theme/default-theme";
import BackButton from "../buttons/back-button/back-button";

function CollapsedToolbar({
  maxHeight,
  source,
  title,
  children,
  headerBackground,
  onBack = (p) => p,
  onImageLoad = (p) => p,
  imageHeight = null,
  showBackButton = true,
}) {
  const scrollY = useRef(new Animated.Value(0)).current;
  const scrollRef = useRef();

  const { top, bottom } = useSafeAreaInsets();

  const HEADER_MIN_HEIGHT = 60 + top;

  const headerScrollDistance = maxHeight - HEADER_MIN_HEIGHT;

  const headerScale = scrollY.interpolate({
    inputRange: [-headerScrollDistance, 0],
    outputRange: [2, 1],
    extrapolate: "clamp",
  });

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, headerScrollDistance],
    outputRange: [0, -headerScrollDistance],
    extrapolate: "clamp",
  });

  const imageOpacity = scrollY.interpolate({
    inputRange: [0, headerScrollDistance / 2, headerScrollDistance],
    outputRange: [1, 1, 0],
    extrapolate: "clamp",
  });
  const imageTranslateY = scrollY.interpolate({
    inputRange: [0, headerScrollDistance],
    outputRange: [0, 100],
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
    <View style={StyleSheet.absoluteFill}>
      <Animated.ScrollView
        ref={scrollRef}
        contentContainerStyle={{ paddingTop: maxHeight, paddingBottom: bottom }}
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
          { height: maxHeight },
          {
            transform: [
              { translateY: headerTranslateY },
              { scale: Platform.OS === "ios" ? headerScale : 1 },
            ],
          },
          { backgroundColor: headerBackground },
        ]}
        pointerEvents="none"
      >
        <Animated.View
          style={[
            styles.headerBackground,
            {
              opacity: imageOpacity,
              transform: [{ translateY: imageTranslateY }],
            },
            { height: maxHeight },
          ]}
          pointerEvents="none"
        >
          <FastImage
            style={{
              ...styles.headerImage,
              ...(imageHeight ? { height: imageHeight } : {}),
            }}
            source={source}
            fadeDuration={200}
            onLoadEnd={onImageLoad}
          />
        </Animated.View>
      </Animated.View>
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
        <Text style={[styles.title, { marginTop: top }]} numberOfLines={1}>
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
  headerImage: {
    flex: 1,
    resizeMode: "cover",
    backgroundColor: DefaultTheme.palette.colors.screenBackground.main,
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
    color: "white",
    fontSize: 16,
    maxWidth: "62%",
  },
  iconView: {
    position: "absolute",
    left: 15,
  },
});

export default memo(CollapsedToolbar);
