import React from "react";
import { StyleSheet, View, Image, ScrollView } from "react-native";
import { Icon } from "react-native-elements";
import AboutAppImage from "./about-app-image";
import AboutAppText from "./about-app-text";
import AppVersion from "./app-version";

export default function AboutAppScreen() {

  return (
    <ScrollView style={StyleSheet.absoluteFill}>
      <AppVersion />
      <AboutAppImage />
      <View style={styles.contentContainer}>
        <AboutAppText />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 15,
  },
});

export const aboutAppTabOptions = {
  tabBarIcon: ({ color, size }) => (
    <Icon name="info" type="font-awesome" size={size} color={color} />
  ),
};
