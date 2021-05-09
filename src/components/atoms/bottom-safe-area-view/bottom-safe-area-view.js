import React from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function BottomSafeAreaView(props) {
  const { bottom } = useSafeAreaInsets();

  return (
    <View style={{ ...StyleSheet.absoluteFill, paddingBottom: bottom }}>
      <View {...props} />
    </View>
  );
}
