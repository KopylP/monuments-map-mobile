import {
  CHANGE_SELECTED_MONUMENT,
  CLOSE_SELECTED_MONUMENT_DIALOG,
} from "../constants";

const initialState = {
  monument: null,
  openDialog: false,
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
    default:
      return state;
  }
};
