import { useNavigation } from "@react-navigation/core";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { compose } from "redux";
import AbsoluteIndicator from "../../components/atoms/indicators/absolute-indicator/absolute-indicator";
import withData from "../../components/hoc-helpers/with-data";
import withMsGetMethod from "../../components/hoc-helpers/with-ms-get-method";
import withRouteParams from "../../components/hoc-helpers/with-route-params";
import { groupPhotoData } from "../../components/molecules/photo-grid/helpers";
import { PHOTO_DETAIL_SCREEN } from "../../navigations/route-consts/monuments-detail-navigation-consts";
import { getPhotoUrlById } from "../../services/photo-service";
import GalleryPhotosList from "./gallery/gallery-photos-list";

function MonumentGalleryScreen({ params, data, loading }) {
  const { title } = params;
  const [photoGroups, setPhotoGroups] = useState(null);
  const { navigate } = useNavigation();

  useEffect(() => {
    if (data && photoGroups == null) {
      setPhotoGroups(
        groupPhotoData(data, (photo) => {
          return {
            uri: getPhotoUrlById(photo.photoId, 500),
          };
        })
      );
    }
  }, [data]);

  function handlePhotoPress(monumentPhoto) {
    const selectedIndex = data.findIndex((p) => p.id === monumentPhoto.id);
    navigate(PHOTO_DETAIL_SCREEN, {
      selectedIndex,
      monumentPhotos: data,
      title,
    });
  }

  return (
    <View style={StyleSheet.absoluteFill}>
      {loading && <AbsoluteIndicator />}
      {photoGroups && (
        <GalleryPhotosList photoGroups={photoGroups} title={title} onPhotoPress={handlePhotoPress}/>
      )}
    </View>
  );
}

const composed = compose(
  withMsGetMethod((p) => p.getMonumentPhotos),
  withRouteParams(),
  withData(({ monumentId }) => [monumentId])
);

export default composed(MonumentGalleryScreen);
