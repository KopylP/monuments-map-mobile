import ViewPager from "@react-native-community/viewpager";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BackButton from "../../components/atoms/buttons/back-button/back-button";
import PhotoDetail from "./photo-detail";

export default function PhotoDetailScreen({ route }) {
  const { selectedIndex, monumentPhotos, title } = route.params;
  const { goBack } = useNavigation();

  const { top } = useSafeAreaInsets();

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

  const iconViewTop = 11 + top;

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
      <BackButton containerStyle={[styles.iconView, { top: iconViewTop }]} onPress={goBack} />
    </View>
  );
}

const styles = StyleSheet.create({
  iconView: {
    position: "absolute",
    left: 15,
  },
});
