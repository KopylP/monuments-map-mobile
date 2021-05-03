import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native";
import { DefaultTheme } from "../../../theme/default-theme";

function SafeArea({ children }) {
  return (
    <React.Fragment>
      <View style={StyleSheet.absoluteFill}>
        <SafeAreaView style={styles.container}>{children}</SafeAreaView>
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    flex: 0,
    backgroundColor: DefaultTheme.palette.colors.primary.dark,
  },
});

export default memo(SafeArea);
