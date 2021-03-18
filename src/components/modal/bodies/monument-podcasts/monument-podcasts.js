import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { groupBy } from "../../../../helpers/array-helpers";
import { useLocate } from "../../../hooks/locate-hooks";
import MonumentPodcastsList from "./monument-podcasts-list";

export default function MonumentPodcasts({ sources }) {

  const groupSources = groupBy(sources, "title");
  const { t } = useLocate();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("Podcasts")}</Text>
      <MonumentPodcastsList sources={groupSources} style={{ marginTop: 10, width: "100%", }} />
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

export const MONUMENT_PODCAST_MODAL = "MONUMENT_PODCAST_MODAL";
