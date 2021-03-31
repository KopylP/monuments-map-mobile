import React from "react";
import { StyleSheet, View } from "react-native";
import ShowingListWithHeader from "../../../../components/molecules/showing-list-with-header";
import MonumentsList from "../monuments-list/monuments-list";

export default function MonumentsListView({ show }) {
  return (
    <View
      style={{ ...StyleSheet.absoluteFill }}
      pointerEvents={show ? "auto" : "none"}
    >
      <ShowingListWithHeader show={show}>
        <MonumentsList />
      </ShowingListWithHeader>
    </View>
  );
}
