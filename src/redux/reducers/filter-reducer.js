import {
  CHANGE_CONDITIONS,
  CHANGE_STATUSES,
  CLEAR_FILTERS,
} from "../constants";

const initialState = {
  conditions: [],
  statuses: [],
  cities: [],
};

export default filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_STATUSES:
      return {
        ...state,
        statuses: action.payload,
      };
    case CHANGE_CONDITIONS: {
      return {
        ...state,
        conditions: action.payload,
      };
    }
    case CLEAR_FILTERS: {
      return initialState;
    }
    default:
      return state;
  }
};
