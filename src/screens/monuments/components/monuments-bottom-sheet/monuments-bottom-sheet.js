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

function MonumentsBottomSheet({
  openDialog,
  closeSelectedMonumentDialog,
  dialogEnabled,
  disableDialog,
}) {
  const bottomRef = useRef();
  const makeCancelable = useCancelablePromise();

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
