import Axios from "axios";
import {
  CHANGE_MONUMENT_MAP_CANCEL_REQUEST,
  FETCH_MONUMENT_MAP_REQUEST,
  FETCH_MONUMENT_MAP_SUCCESS,
  FETCH_MONUMENT_MAP_FAILURE,
  REQUEST_MONUMENT_MAP_FETCH,
  CHANGE_MONUMENT_MAP_ALL_FILTERS,
  CLEAR_MONUMENT_MAP_ALL_FILTERS,
} from "../constants";
import { yearsRange as defaultYearsRange } from "../../config";

const changeMonumentMapCancelRequest = (e) => {
  return {
    type: CHANGE_MONUMENT_MAP_CANCEL_REQUEST,
    payload: e,
  };
};

const monumentMapRequest = () => {
  return {
    type: FETCH_MONUMENT_MAP_REQUEST,
  };
};

const monumentMapLoaded = (monuments) => {
  return {
    type: FETCH_MONUMENT_MAP_SUCCESS,
    payload: monuments,
  };
};

const monumentMapFailure = (error) => {
  return {
    type: FETCH_MONUMENT_MAP_FAILURE,
    payload: error,
  };
};

export const fetchMonumentMap = (monumentService) => () => (
  dispatch,
  getState
) => {
  function executor(e) {
    dispatch(changeMonumentMapCancelRequest(e));
  }

  const {
    cancelRequest = null,
    statuses = [],
    conditions = [],
    cities = [],
    yearsRange = defaultYearsRange,
  } = getState().monumentMap;

  if (cancelRequest) {
    cancelRequest();
  }

  dispatch(monumentMapRequest());

  monumentService
    .getMonumentsByFilter(
      cities.map((c) => c.id),
      statuses,
      conditions,
      yearsRange,
      executor
    )
    .then((monuments) => {
      dispatch(monumentMapLoaded(monuments));
    })
    .catch((e) => {
      if (!Axios.isCancel(e)) {
        dispatch(monumentMapFailure(e));
      }
    });
};

export const requestMonumentMapFetch = () => ({
  type: REQUEST_MONUMENT_MAP_FETCH,
});

export const changeMonumentMapAllFilters = (
  statuses,
  conditions,
  yearsRange
) => {
  return {
    type: CHANGE_MONUMENT_MAP_ALL_FILTERS,
    payload: {
      statuses,
      conditions,
      yearsRange,
    },
  };
};

export const clearMonumentMapFilters = () => {
  return {
    type: CLEAR_MONUMENT_MAP_ALL_FILTERS,
  };
};
