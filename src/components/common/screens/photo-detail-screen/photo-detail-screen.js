import ViewPager from "@react-native-community/viewpager";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import BackButton from "../../../template/buttons/back-button";
import PhotoDetail from "./photo-detail";

export default function PhotoDetailScreen({ route }) {
  const { selectedIndex, monumentPhotos, title } = route.params;
  const { goBack } = useNavigation();

  const [canTouch, setCanTouch] = useState(true);

  const enableTouch = () => {
    if (!canTouch) {
      setCanTouch(true);
    }
  };

  const disableTouch = () => {
    if (canTouch) {
      setCanTouch(false);
    }
  };

  const handlePageScrollStateChanged = (e) => {
    const { pageScrollState } = e.nativeEvent;
    switch (pageScrollState) {
      case "idle":
        enableTouch();
      default:
        disableTouch();
    }
  };

  return (
    <View style={StyleSheet.absoluteFill}>
      <ViewPager
        initialPage={selectedIndex}
        onPageScrollStateChanged={handlePageScrollStateChanged}
        style={{ flex: 1 }}
      >
        {monumentPhotos.map((monumentPhoto) => (
          <View style={{ flex: 1 }} key={`${monumentPhoto.id}`}>
            <PhotoDetail
              {...monumentPhoto}
              title={title}
              touchable={canTouch}
            />
          </View>
        ))}
      </ViewPager>
      <BackButton containerStyle={styles.iconView} onPress={goBack} />
    </View>
  );
}

const styles = StyleSheet.create({
  iconView: {
    position: "absolute",
    top: 11,
    left: 15,
  },
});
