import ViewPager from "@react-native-community/viewpager";
import React, { useState } from "react";
import { View } from "react-native";
import PhotoDetail from "./photo-detail";

export default function PhotoDetailScreen({ route }) {
  const { selectedIndex, monumentPhotos, title } = route.params;

  const [canTouch, setCanTouch] = useState(true);

  const enableTouch = () => {
    if (!canTouch) {
      setCanTouch(true);
    }
  }

  const disableTouch = () => {
    if (canTouch) {
      setCanTouch(false);
    }
  }

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
    <ViewPager
      initialPage={selectedIndex}
      onPageScrollStateChanged={handlePageScrollStateChanged}
      style={{ flex: 1 }}
    >
      {monumentPhotos.map((monumentPhoto) => (
        <View style={{ flex: 1 }} key={`${monumentPhoto.id}`}>
          <PhotoDetail {...monumentPhoto} title={title} touchable={canTouch}/>
        </View>
      ))}
    </ViewPager>
  );
}
