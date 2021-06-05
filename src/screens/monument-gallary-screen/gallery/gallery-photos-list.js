import React, { useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PHOTO_DETAIL_SCREEN } from "../../../navigations/route-consts/monuments-detail-navigation-consts";
import PhotoGrid from "../../../components/molecules/photo-grid";

const SIZE = Math.floor(Dimensions.get("window").width / 3) - 2;

export default function GalleryPhotosList({ photoGroups = [], title }) {
  const navigation = useNavigation();

  const { bottom } = useSafeAreaInsets();

  // const handleImageSelected = (image) => {
  //   navigation.navigate(PHOTO_DETAIL_SCREEN, {
  //     selectedIndex: index,
  //     monumentPhotos: monumentPhotos,
  //     title: title,
  //   });
  // };

  return (
    <View style={{...StyleSheet.absoluteFill, backgroundColor: "white"}}>
      <PhotoGrid
        photoGroups={photoGroups}
        listProps={{
          contentContainerStyle: {
            paddingBottom: bottom
          },
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
