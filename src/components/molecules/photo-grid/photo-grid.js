import React, { memo } from "react";
import { View } from "react-native";
import { FlatList } from "react-native";
import {
 PHOTO_MARGIN,
} from "../../atoms/photo-grid-components";
import OneImageGrid from "../../atoms/photo-grid-components/one-image-grid";
import ThreeImagesLeftGrid from "../../atoms/photo-grid-components/three-images-left-grid";
import ThreeImagesRightGrid from "../../atoms/photo-grid-components/three-images-right-grid";
import TwoImagesGrid from "../../atoms/photo-grid-components/two-images-grid";

function PhotoGrid({ photoGroups, onPress = (p) => p, listProps }) {
  function handlePress(payload) {
    onPress(payload);
  }

  function renderItem({ item }) {

    switch (item.type) {
      case "one-grid":
        return <OneImageGrid data={item.data} onPress={handlePress} />;
      case "two-grid":
        return <TwoImagesGrid data={item.data} onPress={handlePress} />;
      case "three-left-grid":
        return <ThreeImagesLeftGrid data={item.data} onPress={handlePress} />;
      case "three-right-grid":
        return <ThreeImagesRightGrid data={item.data} onPress={handlePress} />;
      default:
        throw TypeError(`Unsupported case option: ${item.type}`);
    }
  }

  function keyExtractor(_, i) {
    return i + "";
  }

  function Delimiter() {
    return (
      <View
        style={{
          width: "100%",
          height: PHOTO_MARGIN,
          backgroundColor: "transparent",
        }}
      />
    );
  }

  return (
    <FlatList
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      {...listProps}
      ItemSeparatorComponent={Delimiter}
      data={photoGroups}
    />
  );
}

export default memo(PhotoGrid);