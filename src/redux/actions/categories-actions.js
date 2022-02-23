import Axios from "axios";
import {
    CHANGE_CATEGORIES_CANCEL_REQUEST,
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  REQUEST_CATEGORIES_FETCH,
} from "../constants";

const changeCancelRequest = (e) => {
  return {
    type: CHANGE_CATEGORIES_CANCEL_REQUEST,
    payload: e,
  };
};

const categoriesRequest = () => {
  return {
    type: FETCH_CATEGORIES_REQUEST,
  };
};

const categoriesLoaded = (categories) => {
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    payload: categories,
  };
};

const categoriesFailure = (error) => {
  return {
    type: FETCH_CATEGORIES_FAILURE,
    payload: error,
  };
};

export const fetchCategories = (monumentService) => () => (
  dispatch,
  getState
) => {
  function executor(e) {
    dispatch(changeCancelRequest(e));
  }

  if (getState().categories.cancelRequest) {
    getState().categories.cancelRequest();
  }

  dispatch(categoriesRequest());

  monumentService
    .getCategories(executor)
    .then((categories) => {
      dispatch(categoriesLoaded(categories));
    })
    .catch((e) => {
      if (!Axios.isCancel(e)) {
        dispatch(categoriesFailure(e));
      }
    });
};

export const requestCategoriesFetch = () => ({
  type: REQUEST_CATEGORIES_FETCH,
});
