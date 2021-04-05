import React, { useCallback } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Dimensions } from "react-native";
import GalleryThumb from "./gallery-thumb";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native";

const SIZE = Math.floor(Dimensions.get("window").width / 3) - 2;

export default function GalleryPhotosList({ monumentPhotos, title }) {
  const navigation = useNavigation();

  const handleImageSelected = (index) => {
    navigation.navigate("PhotoDetail", {
      selectedIndex: index,
      monumentPhotos: monumentPhotos,
      title: title,
    });
  };

  const renderItem = useCallback(({ item, index }) => (
    <GalleryThumb
      {...item.photo}
      size={SIZE}
      onPress={() => handleImageSelected(index)}
    />
  ), []);

  return (
    <View style={StyleSheet.absoluteFill}>
      <FlatList
        style={{ flex: 1 }}
        numColumns={3}
        data={monumentPhotos}
        renderItem={renderItem}
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
