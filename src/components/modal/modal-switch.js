import React, { memo, useState } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import MonumentPodcasts, {
  MONUMENT_PODCAST_MODAL,
} from "./bodies/monument-podcasts/monument-podcasts";
import Modal from "react-native-modal";
import { closeModal } from "../../redux/actions/modal-actions";

function ModalSwitch({ modalId, modalData, open, closeModal }) {
  let modalBody = null;

  switch (modalId) {
    case MONUMENT_PODCAST_MODAL:
      modalBody = <MonumentPodcasts sources={modalData} />;
  }

  const [showBody, setShowBody] = useState(true);

  const handleHide = () => setShowBody(false);
  const handleWillShow = () => setShowBody(true);

  return (
    <Modal
      isVisible={open}
      onModalWillShow={handleWillShow}
      onBackdropPress={closeModal}
      animationIn="fadeIn"
      animationOut="fadeOut"
      backdropTransitionInTiming={200}
      backdropTransitionOutTiming={200}
      animationInTiming={200}
      animationOutTiming={200}
      onBackButtonPress={closeModal}
      onSwipeComplete={closeModal}
      useNativeDriverForBackdrop={true}
      onModalHide={handleHide}
    >
      {showBody ? (
        <View
          style={{
            backgroundColor: "white",
            padding: 22,
            justifyContent: "center",
            alignItems: "center",
            maxHeight: "80%",
            borderRadius: 4,
            borderColor: "rgba(0, 0, 0, 0.1)",
          }}
        >
          {modalBody}
        </View>
      ) : (
        <View />
      )}
    </Modal>
  );
}

const bindStateToProps = ({ modal: { modalId, modalData, open } }) => ({
  modalId,
  modalData,
  open,
});

const bindMethodToProps = { closeModal };

export default connect(bindStateToProps, bindMethodToProps)(ModalSwitch);
