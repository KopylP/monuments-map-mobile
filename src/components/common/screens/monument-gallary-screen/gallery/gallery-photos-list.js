import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
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
      <SafeAreaView style={styles.container}>
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
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    marginTop: -21,
    marginHorizontal: -2,
    flexDirection: "row",
    justifyContent: "flex-start",
    flexWrap: "wrap",
  },
  imageThumbnail: {
    height: SIZE,
    width: SIZE,
  },
});
