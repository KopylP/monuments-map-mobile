import React, { useCallback } from "react";
import { FlatList } from "react-native";
import SourceItem from "./source-item";

export default function SourcesList({ sources }) {
  const renderItem = useCallback(({ item }) => <SourceItem {...item} />, []);

  const handleKeyExtractor = (item) => {
    return `${item.sourceLink || item.title}`;
  };

  return (
    <FlatList
      data={sources}
      renderItem={renderItem}
      keyExtractor={handleKeyExtractor}
      contentContainerStyle={{
        paddingVertical: 15,
        paddingHorizontal: 20,
      }}
    />
  );
}
