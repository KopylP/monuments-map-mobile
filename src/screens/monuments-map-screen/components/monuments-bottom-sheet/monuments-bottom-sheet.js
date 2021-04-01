import React, { useEffect, useRef, useState } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import TempBottomSheet from "../../../../components/atoms/temp-bottom-sheet/temp-bottom-sheet";
import {
  closeSelectedMonumentDialog,
  disableDialog,
} from "../../../../redux/actions/selected-monument-actions";
import MapMonumentCard from "../map-monument-card";
import useCancelablePromise from "@rodw95/use-cancelable-promise";
import timeout from "../../../../helpers/timeout-promise";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SCREEN_HEIGHT } from "../../../../helpers/dimensions-helpers";

function MonumentsBottomSheet({
  openDialog,
  closeSelectedMonumentDialog,
  dialogEnabled,
  disableDialog,
}) {
  const bottomRef = useRef();
  const makeCancelable = useCancelablePromise();
  const { top } = useSafeAreaInsets();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (openDialog) {
      makeCancelable(timeout(100)).then(() => bottomRef.current.open());
    } else if (!openDialog && currentIndex !== 0) closeDialog();
  }, [openDialog]);

  const handleChange = (index) => {
    setCurrentIndex(index);
    if (index === 0) {
      closeSelectedMonumentDialog();
    }
  };

  const closeDialog = () => {
    setCurrentIndex(0);
    bottomRef.current.close();
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
