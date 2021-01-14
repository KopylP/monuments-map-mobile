import React from "react";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import { View } from "react-native";
import FilterTitle from "./filter-title";
import { DefaultTheme } from "../../../../../../theme/default-theme";
import { Text } from "react-native";
import { yearsRange } from "../../../../../../config";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { useLocate } from "../../../../../../components/hooks/locate-hooks";

const screenWidth = Math.round(Dimensions.get("window").width);

export default function YearsRangeFilter({
  style,
  onValuesChangeStart,
  onValuesChangeFinish,
  selectedYearsRange,
  changeYearsRange,
}) {

  const { t } = useLocate();

  return (
    <View style={[styles.container, style]}>
      <FilterTitle title={t("Year built")} />
      <View style={styles.sliderView}>
        <MultiSlider
          values={selectedYearsRange}
          onValuesChange={changeYearsRange}
          min={yearsRange[0]}
          max={yearsRange[1]}
          sliderLength={screenWidth - 50}
          selectedStyle={styles.selected}
          markerStyle={styles.marker}
          onValuesChangeStart={onValuesChangeStart}
          onValuesChangeFinish={onValuesChangeFinish}
        />
        <View style={styles.yearsContainer}>
          <Text style={styles.year}>{selectedYearsRange[0]}</Text>
          <Text style={styles.year}>{selectedYearsRange[1]}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "flex-start",
  },
  year: {
    fontWeight: "bold",
  },
  sliderView: {
    alignSelf: "center",
    marginHorizontal: 10,
    marginTop: -10,
  },
  marker: {
    backgroundColor: DefaultTheme.pallete.colors.primary.main,
    shadowRadius: 0,
    shadowColor: "transparent",
    width: 20,
    height: 20,
    borderWidth: 0,
  },
  selected: {
    backgroundColor: DefaultTheme.pallete.colors.primary.main,
  },
  yearsContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginHorizontal: -7,
    marginTop: -5,
  },
});
