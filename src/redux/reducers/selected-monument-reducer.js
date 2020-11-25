import {
  CHANGE_SELECTED_MONUMENT,
  CLOSE_SELECTED_MONUMENT_DIALOG,
  DISABLE_DIALOG,
  ENABLE_DIALOG,
} from "../constants";

const initialState = {
  monument: null,
  openDialog: false,
  dialogEnabled: false,
};

export default selectedMonumentReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SELECTED_MONUMENT:
      return {
        monument: action.payload,
        openDialog: true,
      };
    case CLOSE_SELECTED_MONUMENT_DIALOG: {
      return {
        ...state,
        openDialog: false,
      };
    }
    case DISABLE_DIALOG:
      return {
        ...state,
        dialogEnabled: false,
      }
    case ENABLE_DIALOG:
      return {
        ...state,
        dialogEnabled: true,
      }
    default:
      return state;
  }
};
