import React, { memo } from "react";
import { useState } from "react";
import MonumentBottomSheet from "../monument-bottom-sheet";
import MonumentsMap from "../../molecules/monuments-map";

function MonumentsMapWithModal({ monuments, onMonumentPress = (p) => p }) {
  const [monument, setMonument] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const handleMonumentMarkerClick = (monument) => {
    setMonument(monument);
    setOpenModal(true);
  };

  const handleMonumentBottomSheetChange = (isOpen) => {
    setOpenModal(isOpen);
  };

  const handleClosePressed = () => {
    setOpenModal(false);
  };

  return (
    <>
      <MonumentsMap
        monuments={monuments}
        onClickMonument={handleMonumentMarkerClick}
      />
      <MonumentBottomSheet
        open={openModal}
        onChange={handleMonumentBottomSheetChange}
        monument={monument}
        onOpenMonument={onMonumentPress}
        onClose={handleClosePressed}
      />
    </>
  );
}

export default memo(MonumentsMapWithModal);
