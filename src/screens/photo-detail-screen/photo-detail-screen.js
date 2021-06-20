import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CloseButton from "../../components/atoms/close-button/close-button";
import GalleryYear from "../../components/atoms/gallery-year";
import InfoButton from "../../components/atoms/info-button";
import PhotoViewPager from "../../components/molecules/photo-view-pager";

export default function PhotoDetailScreen({ route }) {
  const { selectedIndex, monumentPhotos } = route.params;
  const { goBack } = useNavigation();
  const { top } = useSafeAreaInsets();
  const [selectedPhoto, setSelectedPhoto] = useState(null);


  function handlePageSelected(e) {
    setSelectedPhoto(monumentPhotos[e.nativeEvent.position]);
  }

  return (
    <View style={StyleSheet.absoluteFill}>
      <PhotoViewPager
        photos={monumentPhotos.map((p) => p.photo)}
        initialPage={selectedIndex}
        onPageSelected={handlePageSelected}
      />
      <CloseButton
        onClick={goBack}
        style={{
          top: 5 + top,
          left: 20,
          position: "absolute",
        }}
      />
      {selectedPhoto && (
        <InfoButton
          style={{
            top: 5 + top,
            right: 20,
            position: "absolute",
          }}
        />
      )}
      {selectedPhoto && (
        <GalleryYear
          style={{
            top: 5 + top,
            right: 60,
            position: "absolute",
          }}
          year={selectedPhoto.year}
          period={selectedPhoto.period}
        />
      )}
    </View>
  );
}
