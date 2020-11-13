import React, { memo, useContext } from "react";
import { StyleSheet, View } from "react-native";
import AppContext from "../../../../context/app-context";
import useData from "../../../hooks/use-data";
import AbsoluteIndicator from "../../../template/indicators/absolute-indicator/absolute-indicator";
import GalleryPhotosList from "./gallery/gallery-photos-list";

function MonumentGalleryScreen({ route }) {
  const { monumentId, title } = route.params;
  const {
    monumentService: { getMonumentPhotos },
  } = useContext(AppContext);
  const { data, loading, error } = useData(getMonumentPhotos, {
    params: [monumentId],
    delay: 300,
  }); // TODO handle error

  return (
    <View style={StyleSheet.absoluteFill}>
      {loading && <AbsoluteIndicator />}
      {data && <GalleryPhotosList monumentPhotos={data} title={title}/>}
    </View>
  );
}

export default memo(MonumentGalleryScreen);
