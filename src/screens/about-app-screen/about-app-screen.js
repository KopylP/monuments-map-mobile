import React from "react";
import { StyleSheet, View, Image, ScrollView } from "react-native";
import { Icon } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { isIOS } from "../../helpers/platform-helpers";
import { DefaultTheme } from "../../theme/default-theme";
import AboutAppImage from "./about-app-image";
import AboutAppText from "./about-app-text";
import AppVersion from "./app-version";

export default function AboutAppScreen() {
  const { tabHeight } = DefaultTheme.dims;

  return (
    <SafeAreaView style={StyleSheet.absoluteFill}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          paddingBottom: isIOS ? tabHeight : 0,
        }}
      >
        <AppVersion />
        <AboutAppImage />
        <View style={styles.contentContainer}>
          <AboutAppText />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
});
