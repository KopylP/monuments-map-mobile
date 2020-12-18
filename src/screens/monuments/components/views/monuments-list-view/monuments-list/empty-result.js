import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { DefaultTheme } from "../../../../../../theme/default-theme";
import { useLocate } from "../../../../../../components/hooks/locate-hooks";

export default function EmptyResult() {
  const { t } = useLocate();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {t("No monuments were found according to these criteria")}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  text: {
    color: DefaultTheme.pallete.colors.primary.dark,
    fontSize: 16,
    textAlign: "center",
  },
});
