import React, { memo } from "react";
import { View } from "react-native";
import MonumentListItem from "./monuments-list-item";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import Tags from "../../../models/tags";
import MonumentsEmptyResult from "../../molecules/monuments-empty-result/monuments-empty-result";
import { FlatList } from "react-native";

function MonumentsList({ monuments, showEmpty, enableClick, onClick }) {
  if (monuments.length == 0 && showEmpty) return <MonumentsEmptyResult />;

  const { top } = useSafeAreaInsets();

  const removeEasterEggs = (monument) => {
    return !monument.isEasterEgg;
  };

  const handlePress = (monument, imageBase64) => {
    const shareId = `item-${monument.id}`;
    if (enableClick) {
      onClick(monument, imageBase64, shareId);
    }
  };

  const renderItem = ({ item }) => {
    return <MonumentListItem monument={item} onPress={handlePress} />;
  };

  monuments = monuments.filter(removeEasterEggs);

  return (
    <FlatList
      style={{ flex: 1 }}
      contentContainerStyle={{
        paddingHorizontal: 20,
        paddingTop: 20 + 70 + top,
        paddingBottom: 20,
      }}
      renderItem={renderItem}
      render
      data={monuments}
      // getItemCount={() => monuments.length}
      keyExtractor={(item) => item.id + ""}
      windowSize={10}
      ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
    />
  );
}

export default memo(MonumentsList);