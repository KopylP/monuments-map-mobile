import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Dimensions } from "react-native";
import GalleryThumb from "./gallery-thumb";
import { useNavigation } from "@react-navigation/native";

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

  return (
    <ScrollView>
      <View style={styles.container}>
        {monumentPhotos.map((mp, i) => {
          return (
            <GalleryThumb
              {...mp.photo}
              key={"" + mp.id}
              size={SIZE}
              onPress={() => handleImageSelected(i)}
            />
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    flexWrap: "wrap",
  },
  imageThumbnail: {
    height: SIZE,
    width: SIZE,
  },
});
