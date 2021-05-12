import { TouchableOpacity } from "@gorhom/bottom-sheet";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Icon } from "react-native-elements";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CloseButton from "../../../components/atoms/close-button";

export default function Header({ onClose }) {
  const { top } = useSafeAreaInsets();
  const paddingTop = top + 10;
  return (
    <View style={[styles.container, { paddingTop }]}>
      <CloseButton onClose={onClose} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    top: 0,
    left: 0,
    position: "absolute",
    zIndex: 5,
  },
});
