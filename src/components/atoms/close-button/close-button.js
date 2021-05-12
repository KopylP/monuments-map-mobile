import React from "react";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import { Icon } from "react-native-elements";
import { StyleSheet } from "react-native";

export default function CloseButton({ onClose = (p) => p, style = {} }) {
  const handleClose = () => setTimeout(() => onClose(), 0);
  return (
    <TouchableOpacity
      onPress={handleClose}
      style={{ ...style, ...styles.container }}
    >
      <Icon color="white" type="ionicon" name="md-close" size={25} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    backgroundColor: "rgba(60, 60, 60, 0.5)",
  },
});
