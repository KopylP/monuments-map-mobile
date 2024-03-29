import React, { memo } from "react";
import { Image, StyleSheet } from "react-native";
import { getPhotoUrlById } from "../../../services/photo-service";
import { TouchableOpacity } from "react-native-gesture-handler";

function GalleryThumb({ id, size, onPress = (p) => p }) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          height: size,
          width: size,
        },
      ]}
      onPress={onPress}
    >
      <Image
        style={styles.imageThumbnail}
        source={{ uri: getPhotoUrlById(id, 400) }}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 1,
  },
  imageThumbnail: {
    flex: 1,
  },
});

export default memo(GalleryThumb, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id;
});
