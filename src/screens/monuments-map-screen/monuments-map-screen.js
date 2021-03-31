import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import SelectedTabs from "../../components/atoms/controls/selected-tabs/selected-tabs";
import MonumentsMapFilterButton from "./components/monuments-map-fitler-button";
import MonumentsBottomSheet from "./components/monuments-bottom-sheet";
import MonumentsListView from "./components/monuments-list-view/monuments-list-view";
import withMonumentService from "../../components/hoc-helpers/with-monument-service";
import {
  fetchMonuments,
  requestMonumentsFetch,
} from "../../redux/actions/monuments-actions";
import { useLocate } from "../../components/hooks/locate-hooks";
import withReduxData from "../../components/hoc-helpers/with-redux-data";
import MapIndicator from "./components/map-indicator";
import Logo from "./components/logo/logo";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MonumentsMap from "./components/monuments-map/monuments-map";

function MonumentsMapScreen() {
  const [tab, setTab] = useState(0);
  const { t } = useLocate();

  const { top } = useSafeAreaInsets();

  return (
    <View style={StyleSheet.absoluteFill}>
      <MonumentsMap />
      <MonumentsBottomSheet />
      <MonumentsListView show={tab == 1} />
      <Logo />
      <MonumentsMapFilterButton />
      <SelectedTabs
        firstTabTitle={t("map")}
        secondTabTitle={t("list")}
        style={{
          position: "absolute",
          top: 15 + top,
          alignSelf: "center",
        }}
        onChangeTab={setTab}
      />
      <MapIndicator />
    </View>
  );
}

const bindDispatchToProps = (dispatch, { monumentService }) => {
  return bindActionCreators(
    {
      fetchAction: fetchMonuments(monumentService),
      requestAction: requestMonumentsFetch,
    },
    dispatch
  );
};

const bindStateToProps = ({
  monuments: { requestFetch, error },
  filter: { statuses, conditions, cities, yearsRange },
}) => ({
  requestFetch,
  statuses,
  conditions,
  cities,
  yearsRange,
  error,
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
