import { HeaderTitle } from "@react-navigation/stack";
import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../../components/atoms/typography/title";
import { DefaultTheme } from "../../theme/default-theme";

export default function CategoryScreen() {
  const { top } = useSafeAreaInsets();

  return (
    <View style={[StyleSheet.absoluteFill, { paddingTop: top + 20 }]}>
      <Title
        title="Hello world"
        style={{ marginHorizontal: DefaultTheme.margins.defaultHorizontal }}
      />
    </View>
  );
}
