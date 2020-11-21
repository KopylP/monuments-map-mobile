import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { isIOS } from "../../../../../../helpers/platform-helpers";
import Title from "../../../../../template/typography/title";
import DetailYear from "../../../../dates/year-detail";
import SourcesButton from "../../../../sources-button/sources-button";
import ConditionChip from "./condition-chip";
import GalleryButton from "./gallery-button";
import MonumentAddress from "./monument-address";
import OpenInMapButton from "./open-in-map-button";

export default function MonumentDetails({ monument }) {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingBottom: 20,
        paddingTop: 10,
      }}
    >
      <Title title={monument.name} />
      <MonumentAddress {...monument} style={styles.address} />
      <DetailYear {...monument} style={styles.year} />
      <Text style={styles.status}>
        {monument && monument.status.name} (
        {monument && monument.protectionNumber})
      </Text>
      <View style={styles.buttonsContainer}>
        <GalleryButton {...monument}/>
        <OpenInMapButton style={styles.rightButton} {...monument} />
        <SourcesButton style={styles.rightButton} {...monument}/>
      </View>
      <View style={styles.chips}>
        <ConditionChip {...monument} />
      </View>
      <Text style={styles.description}>{monument.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    marginTop: 15,
    flexDirection: "row",
  },
  rightButton: {
    marginLeft: 10,
  },
  description: {
    marginTop: 20,
    fontSize: 16,
  },
  status: {
    fontWeight: isIOS ? "600": "700",
    marginTop: 5,
  },
  year: {
    fontWeight: isIOS ? "600": "700",
    marginTop: 15,
  },
  address: {
    marginTop: 3,
  },
  chips: {
    marginTop: 20,
    alignItems: "flex-start",
  },
});
