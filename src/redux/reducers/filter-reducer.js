import { yearsRange } from "../../config";
import {
  CHANGE_CONDITIONS,
  CHANGE_STATUSES,
  CLEAR_FILTERS,
  CHANGE_YEARS_RANGE
} from "../constants";

const initialState = {
  conditions: [],
  statuses: [],
  cities: [],
  yearsRange: yearsRange
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
    case CHANGE_YEARS_RANGE: {
      return {
        ...state,
        yearsRange: action.payload
      }
    }
    case CLEAR_FILTERS: {
      return initialState;
    }
    default:
      return state;
  }
};
