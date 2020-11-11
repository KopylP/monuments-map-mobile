import { TouchableOpacity } from "@gorhom/bottom-sheet";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import DetailYear from "../../../dates/year-detail";

export default function Header({ title, year, period, onClose }) {
  console.log("year", year);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onClose} style={styles.iconContainer}>
        <Icon color="white" type="ionicon" name="md-close" size={25} />
      </TouchableOpacity>
      <View style={styles.dataContainer}>
        <Text style={[styles.text, styles.title]}>{title}</Text>
        <DetailYear style={[styles.text]} year={year} period={period} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: null,
    paddingHorizontal: 20,
    paddingTop: 25,
    paddingBottom: 20,
    flexDirection: "row",
    position: "absolute",
    zIndex: 2,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    alignItems: "center",
    top: 0,
    left: 0,
    right: 0,
  },
  dataContainer: {
    marginLeft: 30,
  },
  text: {
    color: "white",
  },
  title: {
    fontSize: 16,
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
