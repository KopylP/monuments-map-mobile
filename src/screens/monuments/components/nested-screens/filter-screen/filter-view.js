import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { DefaultTheme } from "../../../../../theme/default-theme";
import ConditionsFilter from "./filters/conditions-filter";
import StatusesFilter from "./filters/statuses-filter";

export default function FilterView() {

  const { main } = DefaultTheme.pallete.colors.primary;

  return (
    <View style={{ flex: 1, padding: 15 }}>
      <StatusesFilter />
      <ConditionsFilter style={{ marginTop: 15 }} />
      <Button color={main} mode="contained" style={{
          marginTop: "auto",
      }}>
        Filter
      </Button>
    </View>
  );
}
