import { CLOSE_MODAL, OPEN_MODAL } from "../constants";

const initialState = {
  modalId: null,
  modalData: null,
  open: false
};

export default modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        modalId: action.payload.modalId,
        modalData: action.payload.modalData,
        open: true
      };
    case CLOSE_MODAL: {
      return {
        ...state,
        open: false
      };
    }
    default:
      return state;
  }
};
