import BottomSheet, { useBottomSheetSpringConfigs } from "@gorhom/bottom-sheet";
import { BlurView } from "expo-blur";
import React, { useCallback, useEffect, useMemo, useRef } from "react";
import MonumentBottomSheetItem from "../../molecules/monument-bottom-sheet-item";
import useCancelablePromise from "@rodw95/use-cancelable-promise";
import timeout from "../../../helpers/timeout-promise";

export default function MonumentBottomSheet({
  sheetState,
  onChange = (isOpen) => isOpen,
  monument,
  onOpenMonument = (monument) => monument,
}) {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => [0, "45%"], []);
  const makeCancelable = useCancelablePromise();

  const handleSheetChanges = useCallback((index) => {
    onChange(index === 1);
  }, []);

  useEffect(() => {
    if (sheetState.open) bottomSheetRef.current.snapTo(sheetState.open ? 1 : 0);
  }, [sheetState]);

  const animationConfigs = useBottomSheetSpringConfigs();

  const handleCloseButton = useCallback(() => {
    bottomSheetRef.current.snapTo(0, 300);
    makeCancelable(timeout(300)).then(() => onChange(false));
  }, []);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={0}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      backgroundComponent={null}
      handleComponent={null}
      animationConfigs={animationConfigs}
    >
      {monument && (
        <MonumentBottomSheetItem
          monument={monument}
          onClose={handleCloseButton}
          onOpenMonument={onOpenMonument}
        />
      )}
    </BottomSheet>
  );
}
