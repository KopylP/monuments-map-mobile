import React, { useEffect, useRef, useState } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import TempBottomSheet from "../../../../components/template/temp-bottom-sheet/temp-bottom-sheet";
import {
  closeSelectedMonumentDialog,
  disableDialog,
} from "../../../../redux/actions/selected-monument-actions";
import MapMonumentCard from "./map-monument-card/map-monument-card";
import useCancelablePromise from "@rodw95/use-cancelable-promise";
import timeout from "../../../../helpers/timeout-promise";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SCREEN_HEIGHT } from "../../../../helpers/dimensions-helpers";
import { Dimensions } from "react-native";

function MonumentsBottomSheet({
  openDialog,
  closeSelectedMonumentDialog,
  dialogEnabled,
  disableDialog,
}) {
  const bottomRef = useRef();
  const makeCancelable = useCancelablePromise();
  const { top } = useSafeAreaInsets();

  useEffect(() => {
    if (openDialog) {
      makeCancelable(timeout(100)).then(() => bottomRef.current.open());
    }
  }, [openDialog]);

  const handleChange = (index) => {
    if (index === 0) {
      closeSelectedMonumentDialog();
    }
  };

  return (
    <TempBottomSheet
      ref={bottomRef}
      onChange={handleChange}
      enabled={dialogEnabled}
      height={SCREEN_HEIGHT / 2 - top - 20}
    >
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
          paddingBottom: 20,
        }}
      >
        <MapMonumentCard onPress={disableDialog} />
      </View>
    </TempBottomSheet>
  );
}

const bindStateToProps = ({
  selectedMonument: { openDialog, dialogEnabled },
}) => ({
  openDialog,
  dialogEnabled,
});

const bindDispatchToProps = { closeSelectedMonumentDialog, disableDialog };

export default connect(
  bindStateToProps,
  bindDispatchToProps
)(MonumentsBottomSheet);
