import { useNavigation } from "@react-navigation/native";
import React, { memo } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { yearsRange } from "../../../../config";
import { arraysAreEquals } from "../../../../helpers/array-helpers";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import FilterButton from "../../../../components/molecules/filter-button/filter-button";

function MonumentsMapFilterButton({ filters }) {
  const { navigate } = useNavigation();

  const { top } = useSafeAreaInsets();

  const handlePress = () => {
    navigate("Filters");
  };

  const countOfFilters = () => {
    const { cities, statuses, conditions } = filters;
    let count = cities.length + statuses.length + conditions.length;
    if (!arraysAreEquals(filters.yearsRange, yearsRange)) {
      count++;
    }
    return count;
  };

  const filterCounts = countOfFilters();

  return (
    <FilterButton style={{
      position: "absolute",
      top: 14 + top,
      right: 15,
      alignSelf: "center",
    }} onPress={handlePress} selectedFiltersCount={filterCounts}/>
  )
}

const bindStateToProps = ({ filter }) => ({ filters: filter });

const composed = compose(connect(bindStateToProps));

export default composed(MonumentsMapFilterButton);
