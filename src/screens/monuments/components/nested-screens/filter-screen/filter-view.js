import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import { connect } from "react-redux";
import { useLocate } from "../../../../../components/hooks/locate-hooks";
import {
  changeConditions,
  changeStatuses,
  changeYearsRange,
} from "../../../../../redux/actions/filter-actions";
import { requestMonumentsFetch } from "../../../../../redux/actions/monuments-actions";
import { DefaultTheme } from "../../../../../theme/default-theme";
import ClearButton from "./filters/clear-button";
import ConditionsFilter from "./filters/conditions-filter";
import StatusesFilter from "./filters/statuses-filter";
import YearsRangeFilter from "./filters/years-range-filter";
import { yearsRange as defaultYearsRange } from "../../../../../config";

function FilterView({
  monumentsLoading,
  requestMonumentsFetch,
  changeStatuses,
  changeConditions,
  changeYearsRange,
  monumentsError,
  filters,
}) {
  const { main } = DefaultTheme.palette.colors.primary;
  const { goBack } = useNavigation();
  const { t } = useLocate();

  const [updatingMonuments, setUpdatingMonuments] = useState(false);
  const [statuses, setStatuses] = useState(filters.statuses);
  const [conditions, setConditions] = useState(filters.conditions);
  const [yearsRange, setYearsRange] = useState(filters.yearsRange);

  const [scrollEnabled, setScrollEnabled] = useState(true);

  const navigation = useNavigation();

  const handleButtonPress = () => {
    changeStatuses(statuses);
    changeConditions(conditions);
    setUpdatingMonuments(true);
    changeYearsRange(yearsRange);
    requestMonumentsFetch();
  };

  const onFailure = (error) => {
    goBack();
  };

  const onSuccess = () => {
    setUpdatingMonuments(false);
    goBack();
  };

  const handleClear = () => {
    setStatuses([]);
    setConditions([]);
    setYearsRange(defaultYearsRange);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <ClearButton onClear={handleClear} />,
    });
  }, [navigation]);

  useEffect(() => {
    if (updatingMonuments && !monumentsLoading) {
      if (monumentsError) onFailure(monumentsError);
      else onSuccess();
    }
  }, [monumentsLoading]);

  const enableScroll = () => {
    setScrollEnabled(true);
  };

  const disableScroll = () => {
    setScrollEnabled(false);
  };

  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        { paddingHorizontal: 15, paddingBottom: 65 },
      ]}
    >
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          paddingTop: 15,
        }}
        scrollEnabled={scrollEnabled}
        showsVerticalScrollIndicator={false}
      >
        <StatusesFilter
          changeStatuses={setStatuses}
          selectedStatuses={statuses}
        />
        <ConditionsFilter
          style={styles.filter}
          changeConditions={setConditions}
          selectedConditions={conditions}
        />
        <YearsRangeFilter
          style={styles.filter}
          selectedYearsRange={yearsRange}
          changeYearsRange={setYearsRange}
          onValuesChangeStart={disableScroll}
          onValuesChangeFinish={enableScroll}
        />
      </ScrollView>
      <Button
        color={main}
        mode="contained"
        loading={updatingMonuments}
        onPress={handleButtonPress}
        style={styles.button}
      >
        {t("Filter")}
      </Button>
    </View>
  );
}

const bindStateToProps = ({ monuments: { loading, error }, filter }) => ({
  monumentsLoading: loading,
  monumentsError: error,
  filters: filter,
});

const bindDispatchToProps = {
  requestMonumentsFetch,
  changeStatuses,
  changeConditions,
  changeYearsRange
};

export default connect(bindStateToProps, bindDispatchToProps)(FilterView);

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 15,
    left: 15,
    right: 15,
  },
  filter: {
    marginTop: 15,
  },
});
