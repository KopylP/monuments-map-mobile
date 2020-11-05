const {
  FETCH_MONUMENTS_REQUEST,
  FETCH_MONUMENTS_SUCCESS,
  FETCH_MONUMENTS_FAILURE,
  CHANGE_CANCEL_REQUEST,
} = require("../constants");

const initialState = {
  monuments: [],
  loading: true,
  error: null,
  cancelRequest: null,
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
    default:
      return state;
  }
};
