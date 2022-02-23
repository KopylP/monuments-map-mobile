import {
    CHANGE_CATEGORIES_CANCEL_REQUEST,
    FETCH_CATEGORIES_FAILURE,
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_SUCCESS,
    REQUEST_CATEGORIES_FETCH,
  } from "../constants";
  
  const initialState = {
    categories: null,
    loading: false,
    error: null,
    cancelRequest: null,
    requestFetch: true,
  };
  
  export default categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_CATEGORIES_REQUEST:
        return {
          ...state,
          error: null,
          loading: true,
        };
      case FETCH_CATEGORIES_SUCCESS:
        return {
          loading: false,
          error: null,
          categories: action.payload,
          requestFetch: false,
        };
      case FETCH_CATEGORIES_FAILURE:
        return {
          error: action.payload,
          loading: false,
          categories: [],
        };
      case CHANGE_CATEGORIES_CANCEL_REQUEST:
        return {
          ...state,
          cancelRequest: action.payload,
        };
      case REQUEST_CATEGORIES_FETCH:
        return {
          ...state,
          requestFetch: true,
        };
      default:
        return state;
    }
  };
  