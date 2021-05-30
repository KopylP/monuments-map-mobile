import React, { memo, useCallback } from "react";
import { useState } from "react";
import MonumentBottomSheet from "../monument-bottom-sheet";
import MonumentsMap from "../../molecules/monuments-map";

function MonumentsMapWithModal({
  monuments,
  locationButtonBottomInset = 0,
  onMonumentPress = (p) => p,
}) {
  const [monument, setMonument] = useState(null);
  const [openModal, setOpenModal] = useState({ open: false });

  const handleMonumentMarkerClick = useCallback((monument) => {
    setMonument(monument);
    setOpenModal({ open: true });
  }, []);

  const handleMonumentBottomSheetChange = useCallback((isOpen) => {
    if (openModal.open !== isOpen) setOpenModal({ open: isOpen });
  }, []);

  return (
    <>
      <MonumentsMap
        monuments={monuments}
        onClickMonument={handleMonumentMarkerClick}
        locationButtonBottomInset={locationButtonBottomInset}
      />
      <MonumentBottomSheet
        sheetState={openModal}
        onChange={handleMonumentBottomSheetChange}
        monument={monument}
        onOpenMonument={onMonumentPress}
      />
    </>
  );
}

export default memo(MonumentsMapWithModal);
