import React, { useState } from "react";
import ViewPager from "@react-native-community/viewpager";
import GalleryImage from "./gallery-image";
import { StyleSheet, View } from "react-native";
import Header from "../header/header";
import { useNavigation } from "@react-navigation/native";

export default function Gallery({ monumentPhotos, title }) {
  const { goBack } = useNavigation();
  const [currentMonumentPhoto, setCurrentMonumentPhoto] = useState(monumentPhotos[0]);

  const renderItem = ({ item }) => {
    return (
      <View
        key={"" + item.id}
        style={StyleSheet.absoluteFill}
      >
        <GalleryImage {...item.photo} key={item.id} />
      </View>
    );
  };
  return (
    <>
      <Header onClose={goBack} title={title} {...currentMonumentPhoto}/>
      <ViewPager initialPage={0} style={{ flex: 1, backgroundColor: "black" }} onPageSelected={e => setCurrentMonumentPhoto(monumentPhotos[0])}>
        {monumentPhotos.map((item, index) => renderItem({ item, index }))}
      </ViewPager>
    </>
  );
}
