const {
  FETCH_MONUMENTS_REQUEST,
  FETCH_MONUMENTS_SUCCESS,
  FETCH_MONUMENTS_FAILURE,
  CHANGE_CANCEL_REQUEST,
  REQUEST_MONUMENTS_FETCH,
} = require("../constants");

const initialState = {
  monuments: [],
  loading: true,
  error: null,
  cancelRequest: null,
  requestFetch: true,
};

export default monumentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MONUMENTS_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case FETCH_MONUMENTS_SUCCESS:
      return {
        loading: false,
        error: null,
        monuments: action.payload,
        requestFetch: false,
      };
    case FETCH_MONUMENTS_FAILURE:
      return {
        error: action.payload,
        loading: false,
        monuments: [],
      };
    case CHANGE_CANCEL_REQUEST:
      return {
        ...state,
        cancelRequest: action.payload,
      };
    case REQUEST_MONUMENTS_FETCH:
      return {
        ...state,
        requestFetch: true,
      };
    default:
      return state;
  }
};
