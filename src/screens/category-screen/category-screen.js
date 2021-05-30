import { BlurView } from "expo-blur";
import React from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BlurHeader from "../../components/atoms/blur-header";
import Title from "../../components/atoms/typography/title";
import { useLocate } from "../../components/hooks/locate-hooks";
import { isIOS } from "../../helpers/platform-helpers";
import { DefaultTheme } from "../../theme/default-theme";
import CategoryList from "./components/category-list/category-list";

export default function CategoryScreen() {
  const { top, bottom } = useSafeAreaInsets();
  const { t } = useLocate();

  const { tabHeight } = DefaultTheme.dims;

  return (
    <View style={StyleSheet.absoluteFill}>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: isIOS ? tabHeight + bottom : 0,
          paddingTop: top,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Title title={t("Home")} style={styles.title} />
        <CategoryList categories={[1, 2, 3, 4, 5, 6, 7, 8]} />
      </ScrollView>
      <BlurHeader />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginHorizontal: DefaultTheme.margins.defaultHorizontal,
    marginTop: 20,
  },
});
