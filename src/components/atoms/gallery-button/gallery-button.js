import React from "react";
import { Icon } from "react-native-elements";
import { StyleSheet, TouchableOpacity } from "react-native";

export default function GalleryButton({ onClick = (p) => p, style = {}, iconName, iconType }) {
  const handleClose = () => setTimeout(() => onClick(), 0);
  return (
    <TouchableOpacity
      onPress={handleClose}
      style={{ ...style, ...styles.container }}
    >
      <Icon color="white" type={iconType} name={iconName} size={25} />
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
