import React from "react";
import { ActivityIndicator } from "react-native";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { DefaultTheme } from "../../../../theme/default-theme";

export default function MapIndicator({ loading }) {
  return (
    <>
      {loading && (
        <View pointerEvents="none" style={styles.container}>
          <View style={styles.indicatorContainer}>
            <ActivityIndicator
              color={DefaultTheme.palette.colors.primary.main}
              size="large"
            />
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  indicatorContainer: {
    width: 80,
    height: 80,
    backgroundColor: "white",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});