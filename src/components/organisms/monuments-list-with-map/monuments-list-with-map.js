import React, { memo, useState } from "react";
import MonumentsList from "../monuments-list";
import useAndroidBack from "../../hooks/use-android-back";
import ShowingListWithHeader from "../../molecules/showing-list-with-header";
import MonumentSelectedTab from "../../molecules/monument-selected-tab";
import MapIndicator from "../../atoms/indicators/map-indicator";
import MonumentsMapWithModal from "../monuments-map-with-modal";
import FocusContainer from "../../containers/focus-container";
import { View } from "react-native";
import { StyleSheet } from "react-native";

function MonumentsListWithMap({
  monuments,
  onMonumentPress,
  enableClick = true,
  loading = false,
  LeftComponent = null,
  RightComponent = null,
}) {
  const [tab, setTab] = useState(0);
  const [focused, setFocused] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useAndroidBack(() => {
    if (focused) {
      if (openDialog && tab == 0) {
        setOpenModal(false);
        return true;
      }

      if (tab == 1 && focused) {
        setTab(0);
        return true;
      }
    }

    return false;
  });

  return (
    <FocusContainer onChange={setFocused}>
      <MonumentsMapWithModal
        openModal={openModal}
        onChangeModal={setOpenModal}
        monuments={monuments}
        enableClick={enableClick}
        onMonumentPress={onMonumentPress}
        enabledDialog={focused}
      />
      <View
        style={StyleSheet.absoluteFill}
        pointerEvents={tab == 1 ? "auto" : "none"}
      >
        <ShowingListWithHeader show={tab == 1}>
          <MonumentsList
            monuments={monuments}
            showEmpty={!loading}
            enableClick={enableClick}
            onClick={onMonumentPress}
          />
        </ShowingListWithHeader>
      </View>
      {LeftComponent}
      {RightComponent}
      <MonumentSelectedTab tab={tab} onChangeTab={setTab} />
      <MapIndicator loading={loading} />
    </FocusContainer>
  );
}

export default memo(MonumentsListWithMap);
