import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import { connect } from "react-redux";
import { useLocate } from "../../../../../components/hooks/locate-hooks";
import {
  changeConditions,
  changeStatuses,
} from "../../../../../redux/actions/filter-actions";
import { requestMonumentsFetch } from "../../../../../redux/actions/monuments-actions";
import { DefaultTheme } from "../../../../../theme/default-theme";
import ClearButton from "./filters/clear-button";
import ConditionsFilter from "./filters/conditions-filter";
import StatusesFilter from "./filters/statuses-filter";

function FilterView({
  monumentsLoading,
  requestMonumentsFetch,
  changeStatuses,
  changeConditions,
  monumentsError,
  filters,
}) {
  const { main } = DefaultTheme.pallete.colors.primary;
  const { goBack } = useNavigation();
  const { t } = useLocate();

  const [updatingMonuments, setUpdatingMonuments] = useState(false);
  const [statuses, setStatuses] = useState(filters.statuses);
  const [conditions, setConditions] = useState(filters.conditions);
  const navigation = useNavigation();

  const handleButtonPress = () => {
    changeStatuses(statuses);
    changeConditions(conditions);
    setUpdatingMonuments(true);
    requestMonumentsFetch();
  };

  const onFailure = (error) => {
    /* TODO handle error */
  };

  const onSuccess = () => {
    setUpdatingMonuments(false);
    goBack();
  };

  const handleClear = () => {
    setStatuses([]);
    setConditions([]);
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
      >
        <StatusesFilter
          changeStatuses={setStatuses}
          selectedStatuses={statuses}
        />
        <ConditionsFilter
          style={{ marginTop: 15 }}
          changeConditions={setConditions}
          selectedConditions={conditions}
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
};

export default connect(bindStateToProps, bindDispatchToProps)(FilterView);

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 15,
    left: 15,
    right: 15,
  },
});
