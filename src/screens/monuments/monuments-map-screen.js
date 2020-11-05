import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import SelectedTabs from "../../components/template/controls/selected-tabs/selected-tabs";
import MonumentsListView from "./components/views/monuments-list-view/monuments-list-view";
import MonumentsMap from "./components/views/monument-map-view/monuments-map/monuments-map";
import withMonumentService from "../../components/hoc-helpers/with-monument-service";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchMonuments } from "../../redux/actions/monuments-actions";
import MonumentsBottomSheet from "./components/monuments-bottom-sheet/monuments-bottom-sheet";
import FilterButton from "./components/fitler-button/filter-button";

function MonumentsMapScreen({ fetchMonuments }) {
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
  connect(null, bindDispatchToProps)(MonumentsMapScreen)
);
