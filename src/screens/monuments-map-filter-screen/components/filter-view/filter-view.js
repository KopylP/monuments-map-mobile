import { useNavigation } from "@react-navigation/native";
import React, { memo, useEffect, useLayoutEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import { connect } from "react-redux";
import { useLocate } from "../../../../components/hooks/locate-hooks";
import { changeAllFilters } from "../../../../redux/actions/filter-actions";
import { requestMonumentsFetch } from "../../../../redux/actions/monuments-actions";
import { DefaultTheme } from "../../../../theme/default-theme";
import ToolbarClearButton from "../../../../components/atoms/buttons/toolbar-clean-button";
import ConditionsFilter from "../conditions-filter";
import StatusesFilter from "../statuses-filter";
import YearsRangeFilter from "../../../../components/molecules/years-range-filter";
import { yearsRange as defaultYearsRange } from "../../../../config";

function FilterView({
  monumentsLoading,
  requestMonumentsFetch,
  changeAllFilters,
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
    changeAllFilters(statuses, conditions, yearsRange);
    setUpdatingMonuments(true);
    setTimeout(() => {
      requestMonumentsFetch();
    }, 0);
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
      headerRight: () => <ToolbarClearButton onClear={handleClear} />,
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
    <View style={{ paddingHorizontal: 15, paddingBottom: 65, ...StyleSheet.absoluteFill }}>
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
          style={styles.filter}
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
          minYear={defaultYearsRange[0]}
          title={t("Year built")}
          maxYear={defaultYearsRange[1]}
        />
      </ScrollView>
      <Button
        color={main}
        mode="contained"
        loading={updatingMonuments}
        onPress={handleButtonPress}
        na
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
  changeAllFilters,
};

export default memo(connect(bindStateToProps, bindDispatchToProps)(FilterView));

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 15,
    left: 15,
    right: 15,
  },
  filter: {
    marginTop: 15,
    marginBottom: 5,
  },
});
