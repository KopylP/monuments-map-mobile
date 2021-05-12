import React, { useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { Dimensions } from "react-native";
import GalleryThumb from "./gallery-thumb";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PHOTO_DETAIL_SCREEN } from "../../../navigations/route-consts/monuments-detail-navigation-consts";

const SIZE = Math.floor(Dimensions.get("window").width / 3) - 2;

export default function GalleryPhotosList({ monumentPhotos, title }) {
  const navigation = useNavigation();

  const { bottom } = useSafeAreaInsets();

  const handleImageSelected = (index) => {
    navigation.navigate(PHOTO_DETAIL_SCREEN, {
      selectedIndex: index,
      monumentPhotos: monumentPhotos,
      title: title,
    });
  };

  const renderItem = useCallback(
    ({ item, index }) => (
      <GalleryThumb
        {...item.photo}
        size={SIZE}
        onPress={() => handleImageSelected(index)}
      />
    ),
    []
  );

  return (
    <View style={StyleSheet.absoluteFill}>
      <FlatList
        style={{ flex: 1 }}
        numColumns={3}
        data={monumentPhotos}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingBottom: bottom,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageThumbnail: {
    height: SIZE,
    width: SIZE,
  },
});
