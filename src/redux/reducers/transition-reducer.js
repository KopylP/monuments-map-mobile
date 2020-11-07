import { TRANSITION_END, TRANSITION_START } from "../constants";

const initialState = {
  transition: false,
};

export default selectedMonumentReducer = (state = initialState, action) => {
  switch (action.type) {
    case TRANSITION_START:
      return {
        transition: true,
      };
    case TRANSITION_END: {
      return {
        transition: false,
      };
    }
    default:
      return state;
  }
};
