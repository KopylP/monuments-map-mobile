import React, { memo } from "react";
import { useState } from "react";
import MonumentsMap from "../../molecules/monuments-map";
import MonumentsModal from "../../molecules/monuments-modal/monuments-modal";

function MonumentsMapWithModal({
  monuments,
  onMonumentPress = p => p,
  enableClick,
  openModal,
  onChangeModal = p => p,
  enabledDialog = true,
}) {
  const [monument, setMonument] = useState(null);

  const handleMonumentMarkerClick = (monument) => {
    setMonument(monument);
    onChangeModal(true);
  }

  return (
    <>
      <MonumentsMap monuments={monuments} onClickMonument={handleMonumentMarkerClick} />
      <MonumentsModal
        open={openModal}
        onCardPress={onMonumentPress}
        monument={monument}
        enabled={enabledDialog}
        enableClick={enableClick}
        onChange={onChangeModal}
      />
    </>
  );
}

export default memo(MonumentsMapWithModal);