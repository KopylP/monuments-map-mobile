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

function MapListScreen({ fetchMonuments, modal }) {
  const [tab, setTab] = useState(0);

  useEffect(() => {
    fetchMonuments();
  }, []);

  return (
    <View style={StyleSheet.absoluteFill}>
      <MonumentsMap />
      <MonumentsBottomSheet />
      <MonumentsListView show={tab == 1} />
      <FilterButton />
      <SelectedTabs
        firstTabTitle="Map"
        secondTabTitle="List"
        style={{
          position: "absolute",
          top: 50,
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



export default withMonumentService()(
  connect(null, bindDispatchToProps)(MapListScreen)
);