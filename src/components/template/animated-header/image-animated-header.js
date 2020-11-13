import React, { useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Animated,
  View,
  Image,
  Platform,
  TouchableWithoutFeedback
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from "react-native-elements";
import { SharedElement } from "react-navigation-shared-element";

const HEADER_MIN_HEIGHT = 84;

export default function ImageAnimatedHeader({
  maxHeight,
  shareId,
  source,
  title,
  children,
  headerBackground,
  onBack = (p) => p,
  onImageLoad = (p) => p,
  onPress = null,
}) {
  const scrollY = useRef(new Animated.Value(0)).current;
  const scrollRef = useRef();

  const headerScrollDistance = maxHeight - HEADER_MIN_HEIGHT;

  const headerScale = scrollY.interpolate({
    inputRange: [-headerScrollDistance * 3, 0],
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

  return (
    <SafeAreaView style={StyleSheet.absoluteFill}>
      <Animated.ScrollView
        ref={scrollRef}
        contentContainerStyle={{ paddingTop: maxHeight - 24 }}
        scrollEventThrottle={16}
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
        >
          <SharedElement id={shareId} style={{ flex: 1 }}>
            <TouchableWithoutFeedback
              disabled={!onPress}
              onPress={onPress}
              style={{ width: "100%", height: maxHeight }}
            >
              <Image
                style={[styles.headerImage]}
                source={source}
                onLoadEnd={onImageLoad}
              />
            </TouchableWithoutFeedback>
          </SharedElement>
        </Animated.View>
      </Animated.View>
      <Animated.View
        style={[
          styles.topBar,
          {
            opacity: titleOpacity,
          },
        ]}
      >
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
      </Animated.View>
      <View style={styles.iconView}>
        <TouchableOpacity onPress={onBack} style={styles.iconTouchableOpacity}>
          <Icon type="ionicon" name="md-arrow-back" color="white" size={30} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
    overflow: "hidden",
  },
  topBar: {
    marginTop: 30,
    height: 50,
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
    maxWidth: "72%",
  },
  iconView: {
    position: "absolute",
    top: 35,
    left: 15,
  },
  iconTouchableOpacity: {
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});
