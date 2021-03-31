import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import withMonumentService from "../../components/hoc-helpers/with-monument-service";
import AbsoluteIndicator from "../../components/atoms/indicators/absolute-indicator/absolute-indicator";
import { fetchConditions } from "../../redux/actions/conditions-actions";
import { fetchStatuses } from "../../redux/actions/statuses-actions";
import FilterView from "./components/filter-view";

function MonumentsMapFilterScreen({
  statusesState,
  conditionsState,
  fetchStatuses,
  fetchConditions,
}) {
  
  useEffect(() => {
    if (statusesState.requestFetch || conditionsState.requestFetch) {
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
      {/* TODO Для обробки помилок треба додати стан, 
              який буде змінюватися кожного разу, коли користувач
              захоче оновити фільтри*/}
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
  connect(bindStateToProps, bindDispatchToProps)(MonumentsMapFilterScreen)
);
