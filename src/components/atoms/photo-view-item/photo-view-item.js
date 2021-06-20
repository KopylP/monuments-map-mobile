import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import PhotoView from "react-native-photo-view";

function PhotoViewItem({
  width,
  height,
  uri,
  onTap = (p) => p,
  onTouchStart = (p) => p,
  onTouchEnd = (p) => p,
}) {
  return (
    <View style={{ ...StyleSheet.absoluteFill }}>
      <PhotoView
        source={{ uri }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        minimumZoomScale={1}
        maximumZoomScale={3}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        onTap={onTap}
        androidScaleType="fitCenter"
        scale={1}
        style={{
          width,
          height,
        }}
      />
    </View>
  );
}

export default memo(PhotoViewItem);
