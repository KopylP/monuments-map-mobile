import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SelectedTabs from "../../../../components/template/controls/selected-tabs/selected-tabs";
import FilterButton from "../fitler-button/filter-button";
import MonumentsBottomSheet from "../monuments-bottom-sheet/monuments-bottom-sheet";
import MonumentsMap from "../views/monument-map-view/monuments-map/monuments-map";
import MonumentsListView from "../views/monuments-list-view/monuments-list-view";
import withMonumentService from "../../../../components/hoc-helpers/with-monument-service";
import { fetchMonuments } from "../../../../redux/actions/monuments-actions";
import { useLocate } from "../../../../components/hooks/locate-hooks";

function MapListScreen({
  fetchMonuments,
  requestFetch,
  statuses,
  conditions,
  cities,
}) {
  const [tab, setTab] = useState(0);
  const { t } = useLocate();

  useEffect(() => {
    if (requestFetch) fetchMonuments(cities, statuses, conditions);
  }, [requestFetch]);

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
    { fetchMonuments: fetchMonuments(monumentService) },
    dispatch
  );
};

const bindStateToProps = ({
  monuments: { requestFetch },
  filter: { statuses, conditions, cities },
}) => ({
  requestFetch,
  statuses,
  conditions,
  cities,
});

export default withMonumentService()(
  connect(bindStateToProps, bindDispatchToProps)(MapListScreen)
);
