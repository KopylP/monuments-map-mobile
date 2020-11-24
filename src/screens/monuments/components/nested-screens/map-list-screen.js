import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import SelectedTabs from "../../../../components/template/controls/selected-tabs/selected-tabs";
import FilterButton from "../fitler-button/filter-button";
import MonumentsBottomSheet from "../monuments-bottom-sheet/monuments-bottom-sheet";
import MonumentsMap from "../views/monument-map-view/monuments-map/monuments-map";
import MonumentsListView from "../views/monuments-list-view/monuments-list-view";
import withMonumentService from "../../../../components/hoc-helpers/with-monument-service";
import {
  fetchMonuments,
  requestMonumentsFetch,
} from "../../../../redux/actions/monuments-actions";
import { useLocate } from "../../../../components/hooks/locate-hooks";
import withReduxData from "../../../../components/hoc-helpers/with-redux-data";

function MapListScreen() {
  const [tab, setTab] = useState(0);
  const { t } = useLocate();

  return (
    <View style={StyleSheet.absoluteFill}>
      <MonumentsMap />
      <MonumentsBottomSheet />
      <MonumentsListView show={tab == 1} />
      <FilterButton />
      <SelectedTabs
        firstTabTitle={t("map")}
        secondTabTitle={t("list")}
        style={{
          position: "absolute",
          top: 25,
          alignSelf: "center",
        }}
        onChangeTab={setTab}
      />
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
  filter: { statuses, conditions, cities },
}) => ({
  requestFetch,
  statuses,
  conditions,
  cities,
  error,
});

const composed = compose(
  withMonumentService(),
  connect(bindStateToProps, bindDispatchToProps),
  withReduxData(
    (p) => ({
      fetchAction: p.fetchAction,
      requestAction: p.requestAction,
    }),
    ({ statuses, conditions, cities }) => [cities, statuses, conditions]
  )
);

export default composed(MapListScreen);
