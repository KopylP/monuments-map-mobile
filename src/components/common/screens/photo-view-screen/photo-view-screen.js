import React from "react";
import { StyleSheet, View } from "react-native";
import Gallery from "react-native-image-gallery";
import Header from "./header/header";

export default function PhotoViewScreen({ route, navigation: { goBack } }) {
  const { imageBase64 } = route.params;

  return (
    <View style={StyleSheet.absoluteFill}>
    <Header onClose={goBack}/>
    <Gallery
      images={[{ source: { uri: imageBase64 } }]}
      style={{ flex: 1, backgroundColor: "black" }}
    />
    </View>
  );
}
