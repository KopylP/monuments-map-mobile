import React from "react";
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

  return (
    <Modal
      isVisible={open}
      onBackdropPress={closeModal}
      onBackButtonPress={closeModal}
      onSwipeComplete={closeModal}
      useNativeDriver={true}
      propagateSwipe
      useNativeDriverForBackdrop={true}
    >
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
