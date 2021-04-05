import React, { memo, useCallback } from "react";
import { FlatList } from "react-native";
import DialogDivider from "../../../atoms/dividers/dialog-divider";
import MonumentPodcastItem from "./monument-podcast-item";

function MonumentPodcastsList({ sources, style = {} }) {
  const renderItem = useCallback(({ item }) => {
    return <MonumentPodcastItem title={item.key} sources={item.values} />;
  }, []);

  const keyExtractor = useCallback((item) => item.key, []);

  return (
    <FlatList
      data={sources}
      style={style}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={DialogDivider}
    />
  );
}

export default memo(MonumentPodcastsList);
