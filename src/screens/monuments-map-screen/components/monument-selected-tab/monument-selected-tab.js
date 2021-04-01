import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SelectedTabs from "../../../../components/atoms/controls/selected-tabs/selected-tabs";
import { useLocate } from "../../../../components/hooks/locate-hooks";

export default function MonumentSelectedTab({ tab, onChangeTab }) {
  const { t } = useLocate();
  const { top } = useSafeAreaInsets();
  return (
    <SelectedTabs
      firstTabTitle={t("map")}
      secondTabTitle={t("list")}
      selectedTab={tab}
      style={{
        position: "absolute",
        top: 15 + top,
        alignSelf: "center",
      }}
      onChangeTab={onChangeTab}
    />
  );
}
