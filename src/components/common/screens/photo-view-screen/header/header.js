import { TouchableOpacity } from "@gorhom/bottom-sheet";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Icon } from "react-native-elements";

export default function Header({ onClose }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onClose} style={styles.iconContainer}>
        <Icon color="white" type="ionicon" name="md-close" size={25} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingTop: 40,
    top: 0,
    left: 0,
    position: "absolute",
    zIndex: 5,
  },
  iconContainer: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
