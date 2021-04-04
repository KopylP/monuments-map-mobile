import React, { memo, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import withMonumentService from "../../components/hoc-helpers/with-monument-service";
import AbsoluteIndicator from "../../components/atoms/indicators/absolute-indicator/absolute-indicator";
import { fetchConditions } from "../../redux/actions/conditions-actions";
import { fetchStatuses } from "../../redux/actions/statuses-actions";
import FilterView from "./components/filter-view";
import useCancelablePromise from "@rodw95/use-cancelable-promise";
import useValueWithDelay from "../../components/hooks/use-value-with-delay";

function MonumentsMapFilterScreen({
  statusesState,
  conditionsState,
  fetchStatuses,
  fetchConditions,
}) {
  var show = useValueWithDelay(true, false, 150);

  useEffect(() => {
    if (statusesState.requestFetch || conditionsState.requestFetch) {
      fetchStatuses();
      fetchConditions();
    }
  }, []);

  if (
    statusesState.loading ||
    conditionsState.loading ||
    statusesState.requestFetch ||
    conditionsState.requestFetch ||
    !show
  ) {
    return <AbsoluteIndicator />;
  }

  return (
    <FilterView />
    /* TODO Для обробки помилок треба додати стан, 
              який буде змінюватися кожного разу, коли користувач
              захоче оновити фільтри*/
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

export default memo(
  withMonumentService()(
    connect(bindStateToProps, bindDispatchToProps)(MonumentsMapFilterScreen)
  )
);
