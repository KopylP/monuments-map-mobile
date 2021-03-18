import React from "react";
import { StyleSheet, View } from "react-native";
import { isIOS } from "../../../../../../helpers/platform-helpers";
import Title from "../../../../../template/typography/title";
import CopyableText from "../../../../copyable-text/copyable-text";
import DetailYear from "../../../../dates/year-detail";
import ButtonGroup from "./button-group";
import ConditionChip from "./condition-chip";
import MonumentAddress from "./monument-address";
import MonumentStatus from "./monument-status";

export default function MonumentDetails({ monument }) {
  return (
    <View
      style={styles.container}
    >
      <Title title={monument.name} style={styles.title} />
      <MonumentAddress {...monument} style={styles.address} />
      <DetailYear {...monument} style={styles.year} />
      <MonumentStatus style={styles.status} {...monument}/>
      <ButtonGroup monument={monument}/>
      <View style={styles.chips}>
        <ConditionChip {...monument} />
      </View>
      <CopyableText style={styles.description}>
        {monument.description || ""}
      </CopyableText>
    </View>
  );
}

const marginHorizontal = 20;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    paddingTop: 10,
  },
  title: {
    marginHorizontal,
  }, 
  buttonsContainer: {
    marginTop: 15,
    flexDirection: "row",
    marginHorizontal
  },
  description: {
    marginTop: 20,
    fontSize: 16,
    marginHorizontal
  },
  status: {
    fontWeight: isIOS ? "600" : "700",
    marginTop: 5,
    marginHorizontal
  },
  year: {
    fontWeight: isIOS ? "600" : "700",
    marginTop: 15,
    marginHorizontal
  },
  address: {
    marginTop: 3,
    marginHorizontal
  },
  chips: {
    marginTop: 20,
    alignItems: "flex-start",
    marginHorizontal
  },
});
