import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import AppMap from "../../components/common/app-map/app-map";
import SelectedTabs from "../../components/template/controls/selected-tabs/selected-tabs";
import MonumentsBottomSheet from "./components/monuments-bottom-sheet/monuments-bottom-sheet";
import MonumentsListView from "./components/views/monuments-list-view/monuments-list-view";

export default function MonumentsMapScreen() {
  const [tab, setTab] = useState(0);
  const ref = React.useRef();

  useEffect(() => {
    ref.current.open();
  }, []);

  useEffect(() => {
    if (tab == 1) {
        ref.current.close();
    }
  }, [tab]);

  return (
    <View style={StyleSheet.absoluteFill}>
      <AppMap></AppMap>
      <MonumentsBottomSheet ref={ref}/>
      <MonumentsListView show={tab == 1}/>
      <SelectedTabs
        firstTabTitle="Map"
        secondTabTitle="List"
        style={{
          position: "fixed",
          top: 50,
          alignSelf: "center",
        }}
        onChangeTab={setTab}
      />
    </View>
  );
}
