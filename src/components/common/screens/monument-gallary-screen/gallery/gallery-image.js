import React, { useState } from "react";
import { Dimensions, View } from "react-native";
import { getPhotoUrlById } from "../../../../../services/photo-service";
import ZoomImage from "../../../../template/images/zoom-image/zoom-image";
import AbsoluteIndicator from "../../../../template/indicators/absolute-indicator/absolute-indicator";

export default function GalleryImage({ imageScale, id }) {
  const windowWidth = Dimensions.get("window").width;
  const [loading, setLoading] = useState(true);
  const onLoadEnd = () => {
    setLoading(false);
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ZoomImage
        onLoadEnd={onLoadEnd}
        width={windowWidth}
        height={windowWidth / imageScale}
        source={{ uri: getPhotoUrlById(id) }}
      />
      {loading && <AbsoluteIndicator backgroundColor="black" />}
    </View>
  );
}
