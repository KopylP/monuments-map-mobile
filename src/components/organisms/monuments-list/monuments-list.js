import React, { memo, useCallback, useMemo } from "react";
import { View } from "react-native";
import MonumentListItem from "./monuments-list-item";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import MonumentsEmptyResult from "../../molecules/monuments-empty-result/monuments-empty-result";
import { FlatList } from "react-native";
import { shallowEqual } from "react-redux";

const removeEasterEggs = (monument) => {
  return !monument.isEasterEgg;
};

const keyExtractor = (item) => item.id + "";
const ItemSeparatorComponent = () => <View style={{ height: 20 }} />

function MonumentsList({ monuments, showEmpty, enableClick, onClick }) {
  if (monuments.length == 0 && showEmpty) return <MonumentsEmptyResult />;

  const { top } = useSafeAreaInsets();

  const handlePress = (monument) => {
    const shareId = `item-${monument.id}`;
    if (enableClick) {
      onClick(monument, shareId);
    }
  };

  const renderItem = useCallback(({ item }) => {
    return <MonumentListItem {...item} onPress={handlePress} />;
  }, []);

  monuments = useMemo(() => monuments.filter(removeEasterEggs), [monuments]);

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
      keyExtractor={keyExtractor}
      windowSize={8}
      initialNumToRender={6}
      ItemSeparatorComponent={ItemSeparatorComponent}
    />
  );
}

export default memo(MonumentsList, (prevProps, nextProps) => {
  return shallowEqual(prevProps, nextProps)
});