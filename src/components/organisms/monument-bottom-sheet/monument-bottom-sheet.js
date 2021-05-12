import BottomSheet, {
  useBottomSheetSpringConfigs,
  useBottomSheetTimingConfigs,
} from "@gorhom/bottom-sheet";
import { BlurView } from "expo-blur";
import React, { useCallback, useEffect, useMemo, useRef } from "react";
import MonumentBottomSheetHeader from "../../atoms/monument-bottom-sheet-header";
import MonumentBottomSheetItem from "../../molecules/monument-bottom-sheet-item";

export default function MonumentBottomSheet({
  open,
  onChange = (isOpen) => isOpen,
  monument,
  onOpenMonument = (monument) => monument,
  onClose,
}) {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => [0, "45%"], []);

  const handleSheetChanges = useCallback((index) => {
    onChange(index === 1);
  }, []);

  useEffect(() => {
    bottomSheetRef.current.snapTo(open ? 1 : 0);
  }, [open]);

  const animationConfigs = useBottomSheetSpringConfigs();

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
          onClose={onClose}
          onOpenMonument={onOpenMonument}
        />
      )}
    </BottomSheet>
  );
}
