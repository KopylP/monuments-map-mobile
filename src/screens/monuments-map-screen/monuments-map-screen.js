import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import MonumentsMapFilterButton from "./components/monuments-map-fitler-button";
import MonumentsBottomSheet from "./components/monuments-bottom-sheet";
import MonumentsListView from "./components/monuments-list-view/monuments-list-view";
import withMonumentService from "../../components/hoc-helpers/with-monument-service";
import {
  fetchMonuments,
  requestMonumentsFetch,
} from "../../redux/actions/monuments-actions";
import withReduxData from "../../components/hoc-helpers/with-redux-data";
import MapIndicator from "./components/map-indicator";
import Logo from "./components/logo/logo";
import MonumentsMap from "./components/monuments-map/monuments-map";
import useAndroidBack from "../../components/hooks/use-android-back";
import { closeSelectedMonumentDialog } from "../../redux/actions/selected-monument-actions";
import FocusContainer from "../../components/containers/focus-container";
import MonumentSelectedTab from "./components/monument-selected-tab";

function MonumentsMapScreen({ openDialog, closeSelectedMonumentDialog }) {
  const [tab, setTab] = useState(0);
  
  const [focused, setFocused] = useState(false);

  useAndroidBack(() => {
    if (openDialog && tab == 0 && focused) {
      closeSelectedMonumentDialog();
      return true;
    } else if (tab == 1) {
      setTab(0);
      return true;
    }
    return false;
  });

  return (
    <FocusContainer onChange={setFocused}>
      <View style={StyleSheet.absoluteFill}>
        <MonumentsMap />
        <MonumentsBottomSheet />
        <MonumentsListView show={tab == 1} />
        <Logo />
        <MonumentsMapFilterButton />
        <MonumentSelectedTab tab={tab} onChangeTab={setTab} />
        <MapIndicator />
      </View>
    </FocusContainer>
  );
}

const bindDispatchToProps = (dispatch, { monumentService }) => {
  return bindActionCreators(
    {
      fetchAction: fetchMonuments(monumentService),
      requestAction: requestMonumentsFetch,
      closeSelectedMonumentDialog: closeSelectedMonumentDialog,
    },
    dispatch
  );
};

const bindStateToProps = ({
  monuments: { requestFetch, error },
  filter: { statuses, conditions, cities, yearsRange },
  selectedMonument: { openDialog },
}) => ({
  requestFetch,
  statuses,
  conditions,
  cities,
  yearsRange,
  error,
  openDialog,
});

const bindPropsToActions = (p) => ({
  fetchAction: p.fetchAction,
  requestAction: p.requestAction,
});

const bindPropsToParams = ({ statuses, conditions, cities, yearsRange }) => [
  cities,
  statuses,
  conditions,
  yearsRange,
];

const composed = compose(
  withMonumentService(),
  connect(bindStateToProps, bindDispatchToProps),
  withReduxData(bindPropsToActions, bindPropsToParams)
);

export default composed(MonumentsMapScreen);
