import React, { useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PHOTO_DETAIL_SCREEN } from "../../../navigations/route-consts/monuments-detail-navigation-consts";
import PhotoGrid from "../../../components/molecules/photo-grid";

const SIZE = Math.floor(Dimensions.get("window").width / 3) - 2;

export default function GalleryPhotosList({ photoGroups = [], title, onPhotoPress }) {
  const navigation = useNavigation();

  const { bottom } = useSafeAreaInsets();

  return (
    <View style={{...StyleSheet.absoluteFill, backgroundColor: "white"}}>
      <PhotoGrid
        photoGroups={photoGroups}
        listProps={{
          contentContainerStyle: {
            paddingBottom: bottom
          },
        }}
        onPress={onPhotoPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
