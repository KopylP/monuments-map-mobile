import React, { memo, useState } from "react";
import { View, StyleSheet } from "react-native";
import PagerView from "react-native-pager-view";
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from "../../../helpers/dimensions-helpers";
import { getPhotoUrlById } from "../../../services/photo-service";
import PhotoViewItem from "../../atoms/photo-view-item";

function PhotoViewPager({ photos, initialPage, onPageSelected = p => p }) {

  const [scrollEnabled, setScrollEnabled] = useState(true);

  function handleTouchStart({ nativeEvent }) {
    if (nativeEvent.touches.length >= 2 && scrollEnabled) {
      setScrollEnabled(false);
    }
  }

  function handleTouchEnd() {
    if (!scrollEnabled) {
      setScrollEnabled(true);
    }
  }

  return (
    <View style={{ ...StyleSheet.absoluteFill, backgroundColor: "black" }}>
      <PagerView 
        initialPage={initialPage}
        scrollEnabled={scrollEnabled}
        onPageSelected={onPageSelected}
        style={StyleSheet.absoluteFill}>
        {photos.map((photo, i) => (
          <PhotoViewItem
            key={i}
            uri={getPhotoUrlById(photo.id)}
            width={SCREEN_WIDTH}
            height={SCREEN_HEIGHT}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          />
        ))}
      </PagerView>
    </View>
  );
}

export default memo(PhotoViewPager);
