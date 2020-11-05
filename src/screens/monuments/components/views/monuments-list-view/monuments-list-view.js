import React from "react";
import { StyleSheet, View } from "react-native";
import AnimatedHeader from "./animated-header";
import AnimatedDataContainer from "./animated-data-container";
import MonumentsList from "./monuments-list/monuments-list";
import { SearchBar } from "react-native-elements";
export default function MonumentsListView({ show }) {
  return (
    <View
      style={{ ...StyleSheet.absoluteFill }}
      pointerEvents={show ? "auto" : "none"}
    >
      <AnimatedHeader show={show} />
      <AnimatedDataContainer show={show}>
        <MonumentsList />
      </AnimatedDataContainer>
    </View>
  );
}
