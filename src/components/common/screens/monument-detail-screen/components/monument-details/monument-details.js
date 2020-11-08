import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { DefaultTheme } from "../../../../../../theme/default-theme";
import Title from "../../../../../template/typography/title";

export default function MonumentDetails({ monument }) {
  return (
    <View>
      <Title title={monument.name}/>
      <Text style={styles.buildAt}>Побудовано у 20-му столітті</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    buildAt: {
        color: DefaultTheme.pallete.colors.subtitle.main,
    }
});
