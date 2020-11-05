import { CHANGE_SELECTED_MONUMENT } from "../constants";

const initialState = null;

export default selectedMonumentReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SELECTED_MONUMENT:
      state = action.payload;
    default:
      return state;
  }
};
