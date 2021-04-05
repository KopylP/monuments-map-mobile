import React, { memo } from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { useLocate } from "../../../hooks/locate-hooks";
import MonumentPodcastsList from "./monument-podcasts-list";

function MonumentPodcasts({ sources }) {
  const { t } = useLocate();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("Podcasts")}</Text>
      <MonumentPodcastsList sources={sources} style={{ marginTop: 10, width: "100%" }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default memo(MonumentPodcasts);

export const MONUMENT_PODCAST_MODAL = "MONUMENT_PODCAST_MODAL";
