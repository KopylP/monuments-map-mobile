import { yearsRange } from "../../config";

const {
  FETCH_MONUMENT_MAP_REQUEST,
  FETCH_MONUMENT_MAP_SUCCESS,
  FETCH_MONUMENT_MAP_FAILURE,
  CHANGE_MONUMENT_MAP_CANCEL_REQUEST,
  REQUEST_MONUMENT_MAP_FETCH,
  CHANGE_MONUMENT_MAP_ALL_FILTERS,
  CLEAR_MONUMENT_MAP_ALL_FILTERS,
} = require("../constants");

const initialState = {
  monuments: [],
  loading: true,
  error: null,
  cancelRequest: null,
  requestFetch: true,
  conditions: [],
  statuses: [],
  cities: [],
  yearsRange: yearsRange,
};

export default monumentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MONUMENT_MAP_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case FETCH_MONUMENT_MAP_SUCCESS:
      return {
        loading: false,
        error: null,
        monuments: action.payload,
        requestFetch: false,
      };
    case FETCH_MONUMENT_MAP_FAILURE:
      return {
        error: action.payload,
        loading: false,
        monuments: [],
      };
    case CHANGE_MONUMENT_MAP_CANCEL_REQUEST:
      return {
        ...state,
        cancelRequest: action.payload,
      };
    case REQUEST_MONUMENT_MAP_FETCH:
      return {
        ...state,
        requestFetch: true,
      };
    case CHANGE_MONUMENT_MAP_ALL_FILTERS: {
      return {
        ...state,
        ...action.payload,
        requestFetch: true,
      };
    }
    case CLEAR_MONUMENT_MAP_ALL_FILTERS: {
      return { ...initialState, requestFetch: true };
    }
    default:
      return state;
  }
};
