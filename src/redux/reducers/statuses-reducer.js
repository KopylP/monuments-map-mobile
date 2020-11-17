import {
  CHANGE_STATUSES_CANCEL_REQUEST,
  FETCH_STATUSES_FAILURE,
  FETCH_STATUSES_REQUEST,
  FETCH_STATUSES_SUCCESS,
} from "../constants";

const initialState = {
  statuses: null,
  loading: false,
  error: null,
  cancelRequest: null,
};

export default statusesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STATUSES_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case FETCH_STATUSES_SUCCESS:
      return {
        loading: false,
        error: null,
        statuses: action.payload,
      };
    case FETCH_STATUSES_FAILURE:
      return {
        error: action.payload,
        loading: false,
        statuses: [],
      };
    case CHANGE_STATUSES_CANCEL_REQUEST:
      return {
        ...state,
        cancelRequest: action.payload,
      };
    default:
      return state;
  }
};
