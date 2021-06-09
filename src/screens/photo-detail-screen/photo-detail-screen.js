import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BackButton from "../../components/atoms/buttons/back-button/back-button";
import CloseButton from "../../components/atoms/close-button/close-button";
import PhotoViewPager from "../../components/molecules/photo-view-pager";

export default function PhotoDetailScreen({ route }) {
  const { selectedIndex, monumentPhotos } = route.params;
  const { goBack } = useNavigation();

  return (
    <View style={StyleSheet.absoluteFill}>
      <PhotoViewPager
        photos={monumentPhotos.map((p) => p.photo)}
        initialPage={selectedIndex}
      />
      <CloseButton onClose={goBack} style={{
        top: 30,
        left: 20,
      }}/>
    </View>
  );
}
