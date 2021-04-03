import { StatusBar } from "expo-status-bar";
import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native";
import { DefaultTheme } from "../../../theme/default-theme";

function SafeArea({ children }) {
  return (
    <React.Fragment>
      {/* {isIOS && <SafeAreaView style={styles.statusBar} />} */}
      <View style={StyleSheet.absoluteFill}>
        <SafeAreaView style={styles.container}>{children}</SafeAreaView>
        <StatusBar
          style="light"
          translucent={false}
          backgroundColor={DefaultTheme.palette.colors.primary.dark}
        />
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
