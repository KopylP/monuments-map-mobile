import React, { memo } from "react";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import { View } from "react-native";
import Subtitle from "../../atoms/typography/subtitle/subtitle";
import { DefaultTheme } from "../../../theme/default-theme";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { SCREEN_WIDTH } from "../../../helpers/dimensions-helpers";

function YearsRangeFilter({
  style,
  onValuesChangeStart,
  onValuesChangeFinish,
  selectedYearsRange,
  changeYearsRange,
  minYear,
  maxYear,
  title,
  sliderLength = SCREEN_WIDTH - 50
}) {

  return (
    <View style={[styles.container, style]}>
      <Subtitle title={title} />
      <View style={styles.sliderView}>
        <MultiSlider
          values={selectedYearsRange}
          onValuesChange={changeYearsRange}
          min={minYear}
          max={maxYear}
          sliderLength={sliderLength}
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
    backgroundColor: DefaultTheme.palette.colors.primary.main,
    shadowRadius: 0,
    shadowColor: "transparent",
    width: 20,
    height: 20,
    borderWidth: 0,
  },
  selected: {
    backgroundColor: DefaultTheme.palette.colors.primary.main,
  },
  yearsContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginHorizontal: -7,
    marginTop: -5,
  },
});

export default memo(YearsRangeFilter);
