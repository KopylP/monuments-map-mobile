import { BlurView } from "expo-blur";
import React from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../../components/atoms/typography/title";
import { useLocate } from "../../components/hooks/locate-hooks";
import { DefaultTheme } from "../../theme/default-theme";
import CategoryList from "./components/category-list/category-list";

export default function CategoryScreen() {
  const { top, bottom } = useSafeAreaInsets();
  const { t } = useLocate();

  return (
    <View style={StyleSheet.absoluteFill}>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: bottom,
          paddingTop: top,
        }}
      >
        <Title
          title={t("Home")}
          style={{
            marginHorizontal: DefaultTheme.margins.defaultHorizontal,
            marginTop: 20,
          }}
        />
        <CategoryList categories={[1, 2, 3, 4, 5, 6, 7, 8]} />
      </ScrollView>
      <BlurView
        intensity={90}
        tint="light"
        style={{
          left: 0,
          right: 0,
          top: 0,
          height: top,
          position: "absolute",
          backgroundColor: "transparent",
        }}
      />
    </View>
  );
}
