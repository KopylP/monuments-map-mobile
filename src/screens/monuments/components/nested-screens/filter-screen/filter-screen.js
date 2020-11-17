import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import withMonumentService from "../../../../../components/hoc-helpers/with-monument-service";
import AbsoluteIndicator from "../../../../../components/template/indicators/absolute-indicator/absolute-indicator";
import { fetchConditions } from "../../../../../redux/actions/conditions-actions";
import { fetchStatuses } from "../../../../../redux/actions/statuses-actions";
import FilterView from "./filter-view";

function FilterScreen({
  statusesState,
  conditionsState,
  fetchStatuses,
  fetchConditions,
}) {
  const { statuses } = statusesState;
  const { conditions } = conditionsState;

  console.log("statuses", statuses);
  console.log("conditions", conditions);
  console.log("statuses loading", statusesState.loading);
  console.log("conditions loading", conditionsState.loading);

  useEffect(() => {
    if (
      (!statuses && !statusesState.loading) ||
      (!conditions && !conditionsState.loading)
    ) {
      console.log("we are loading this shit");
      fetchStatuses();
      fetchConditions();
    }
  }, []);

  return (
    <View style={StyleSheet.absoluteFill}>
      {(statusesState.loading || conditionsState.loading) && (
        <AbsoluteIndicator />
      )}
      {!statusesState.loading && !conditionsState.loading && <FilterView />}
      {/* TODO handle error */}
    </View>
  );
}

const bindStateToProps = ({ statuses, conditions }) => ({
  statusesState: statuses,
  conditionsState: conditions,
});

const bindDispatchToProps = (dispatch, { monumentService }) => {
  return bindActionCreators(
    {
      fetchStatuses: fetchStatuses(monumentService),
      fetchConditions: fetchConditions(monumentService),
    },
    dispatch
  );
};

export default withMonumentService()(
  connect(bindStateToProps, bindDispatchToProps)(FilterScreen)
);
