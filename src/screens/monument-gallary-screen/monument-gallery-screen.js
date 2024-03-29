import React from "react";
import { StyleSheet, View } from "react-native";
import { compose } from "redux";
import AbsoluteIndicator from "../../components/atoms/indicators/absolute-indicator/absolute-indicator";
import withData from "../../components/hoc-helpers/with-data";
import withMsGetMethod from "../../components/hoc-helpers/with-ms-get-method";
import withRouteParams from "../../components/hoc-helpers/with-route-params";
import GalleryPhotosList from "./gallery/gallery-photos-list";

function MonumentGalleryScreen({ params, data, loading }) {
  const { title } = params;

  return (
    <View style={StyleSheet.absoluteFill}>
      {loading && <AbsoluteIndicator />}
      {data && !loading && <GalleryPhotosList monumentPhotos={data} title={title} />}
    </View>
  );
}

const composed = compose(
  withMsGetMethod((p) => p.getMonumentPhotos),
  withRouteParams(),
  withData(({ monumentId }) => [monumentId])
);

export default composed(MonumentGalleryScreen);
