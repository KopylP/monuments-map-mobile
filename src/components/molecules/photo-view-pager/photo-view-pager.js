import React, { memo } from "react";
import { View, StyleSheet } from "react-native";
import PagerView from "react-native-pager-view";
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from "../../../helpers/dimensions-helpers";
import { getPhotoUrlById } from "../../../services/photo-service";
import PhotoViewItem from "../../atoms/photo-view-item";

function PhotoViewPager({ photos, initialPage }) {
  return (
    <View style={{ ...StyleSheet.absoluteFill, backgroundColor: "black" }}>
      <PagerView initialPage={initialPage} style={StyleSheet.absoluteFill}>
        {photos.map((photo, i) => (
          <PhotoViewItem
            key={i}
            uri={getPhotoUrlById(photo.id)}
            width={SCREEN_WIDTH}
            height={SCREEN_HEIGHT}
          />
        ))}
      </PagerView>
    </View>
  );
}

export default memo(PhotoViewPager);
