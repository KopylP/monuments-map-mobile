import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Dimensions, Platform, StyleSheet, Text, View } from "react-native";
import { DefaultTheme } from "../../../../../../theme/default-theme";
import RectangularButton from "../../../../../template/buttons/rectangular-button";
import Title from "../../../../../template/typography/title";
import DetailYear from "../../../../dates/year-detail";
import SourcesButton from "../../../../sources-button/sources-button";
import ConditionChip from "./condition-chip";
import MonumentAddress from "./monument-address";
import OpenInMapButton from "./open-in-map-button";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export default function MonumentDetails({ monument }) {
  const { navigate } = useNavigation();
  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingBottom: 20,
        paddingTop: Platform.OS === "android" ? 40 : 20,
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
        <RectangularButton
          iconName="ios-images"
          iconType="ionicon"
          color={DefaultTheme.pallete.colors.primary.main}
          textColor="white"
          title="Галерея"
          onPress={() =>
            navigate("Gallery", {
              title: monument.name,
              monumentId: monument.id,
            })
          }
        />
        <OpenInMapButton style={styles.rightButton} {...monument} />
        <SourcesButton style={styles.rightButton}/>
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
    fontWeight: "600",
    marginTop: 5,
  },
  year: {
    fontWeight: "600",
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
