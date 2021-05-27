import { yearsRange } from "../../config";

const {
  FETCH_MONUMENT_LIST_REQUEST,
  FETCH_MONUMENT_LIST_SUCCESS,
  FETCH_MONUMENT_LIST_FAILURE,
  CHANGE_MONUMENT_LIST_CANCEL_REQUEST,
  REQUEST_MONUMENT_LIST_FETCH,
  CHANGE_MONUMENT_LIST_ALL_FILTERS,
  CLEAR_MONUMENT_LIST_ALL_FILTERS,
} = require("../constants");

const initialState = {
  monuments: [],
  loading: true,
  loadingExtra: false,
  error: null,
  cancelRequest: null,
  requestFetch: true,
  conditions: [],
  statuses: [],
  cities: [],
  yearsRange: yearsRange,
  pagination: null,
};

export default monumentListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MONUMENT_LIST_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case FETCH_MONUMENT_LIST_SUCCESS:
      return {
        loading: false,
        error: null,
        monuments: action.payload.data,
        pagination: action.payload.pagination,
        requestFetch: false,
      };
    case FETCH_MONUMENT_LIST_FAILURE:
      return {
        error: action.payload,
        loading: false,
        monuments: [],
      };
    case CHANGE_MONUMENT_LIST_CANCEL_REQUEST:
      return {
        ...state,
        cancelRequest: action.payload,
      };
    case REQUEST_MONUMENT_LIST_FETCH:
      return {
        ...state,
        requestFetch: true,
      };
    case CHANGE_MONUMENT_LIST_ALL_FILTERS: {
      return {
        ...state,
        ...action.payload,
        requestFetch: true,
      };
    }
    case CLEAR_MONUMENT_LIST_ALL_FILTERS: {
      return { ...initialState, requestFetch: true };
    }
    default:
      return state;
  }
};
