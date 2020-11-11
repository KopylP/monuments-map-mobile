import { useNavigation } from "@react-navigation/native";
import React, { memo, useContext, useEffect } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import AppContext from "../../../../context/app-context";
import { DefaultTheme } from "../../../../theme/default-theme";
import useData from "../../../hooks/use-data";
import AbsoluteIndicator from "../../../template/indicators/absolute-indicator/absolute-indicator";
import Gallery from "./gallery/gallary";
import Header from "./header/header";
function MonumentGalleryScreen({ route, navigation }) {
  const { monumentId, title } = route.params;
  const {
    monumentService: { getMonumentPhotos },
  } = useContext(AppContext);
  const { data, loading, error } = useData(getMonumentPhotos, {
    params: [monumentId],
    delay: 300,
  }); // TODO handle error

  useEffect(() => {
    navigation.dangerouslyGetParent().setOptions({ tabBarVisible: false });
  }, []);
  return (
    <View style={StyleSheet.absoluteFill}>
      {loading && <AbsoluteIndicator backgroundColor="black" />}
      {data && <Gallery monumentPhotos={data} title={title}/>}
    </View>
  );
}

export default memo(MonumentGalleryScreen);
