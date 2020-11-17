import {
  CHANGE_CONDITIONS_CANCEL_REQUEST,
  FETCH_CONDITIONS_FAILURE,
  FETCH_CONDITIONS_REQUEST,
  FETCH_CONDITIONS_SUCCESS,
} from "../constants";

const initialState = {
  conditions: null,
  loading: false,
  error: null,
  cancelRequest: null,
};

export default conditionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CONDITIONS_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case FETCH_CONDITIONS_SUCCESS:
      return {
        loading: false,
        error: null,
        conditions: action.payload,
      };
    case FETCH_CONDITIONS_FAILURE:
      return {
        error: action.payload,
        loading: false,
        conditions: [],
      };
    case CHANGE_CONDITIONS_CANCEL_REQUEST:
      return {
        ...state,
        cancelRequest: action.payload,
      };
    default:
      return state;
  }
};
