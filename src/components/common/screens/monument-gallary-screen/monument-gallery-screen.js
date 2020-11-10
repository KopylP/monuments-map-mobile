import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ZoomImage from "../../../template/images/zoom-image/zoom-image";
function MonumentGalleryScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.dangerouslyGetParent().setOptions({ tabBarVisible: false });
    navigation.setOptions({ tabBarVisible: false });
  }, []);
  return (
    <View style={[StyleSheet.absoluteFill]}>
      <FlatList
        style={StyleSheet.absoluteFill}
        horizontal
        pagingEnabled
        renderItem={({ item }) => {
          return <ZoomImage source={item} />;
        }}
      />
      <ZoomImage
        source={{ uri: "https://picsum.photos/600/500" }}
        width={300}
        height={500}
      />
    </View>
  );
}

export default MonumentGalleryScreen;
