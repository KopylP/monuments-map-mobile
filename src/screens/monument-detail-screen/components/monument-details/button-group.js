import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { IsPodcast } from "../../../../models/source-type";
import SourcesButton from "../../../../components/molecules/sources-button/sources-button";
import GalleryButton from "./gallery-button";
import OpenInMapButton from "./open-in-map-button";
import PodcastsButton from "./podcasts-button";

export default function ButtonGroup({ monument }) {
  const podcastSources = monument.sources.filter(IsPodcast);
  const podcastsAvailable = podcastSources.length;
  const sourcesWithoutPodcasts = monument.sources.filter(IsPodcast);

  const podcastButtonStyles = {
    ...styles.button,
    ...(!podcastsAvailable ? styles.invisible : {}),
  }

  return (
    <View style={styles.container}>
      <GalleryButton {...monument} style={styles.button} />
      <OpenInMapButton style={styles.button} {...monument} />
      <SourcesButton style={styles.button} sources={sourcesWithoutPodcasts} />
      <PodcastsButton
        style={podcastButtonStyles}
        sources={podcastSources}
        disabled={!podcastsAvailable}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  invisible: {
    opacity: 0,
  },
});
