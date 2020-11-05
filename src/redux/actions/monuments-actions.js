import Axios from "axios";
import {
  FETCH_MONUMENTS_REQUEST,
  FETCH_MONUMENTS_SUCCESS,
  FETCH_MONUMENTS_FAILURE,
  CHANGE_CANCEL_REQUEST,
} from "../constants";
import { yearsRange } from "../../config";

const changeCancelRequest = (e) => {
  return {
    type: CHANGE_CANCEL_REQUEST,
    payload: e,
  };
};

const monumentsRequest = () => {
  return {
    type: FETCH_MONUMENTS_REQUEST,
  };
};

const monumentsLoaded = (monuments) => {
  return {
    type: FETCH_MONUMENTS_SUCCESS,
    payload: monuments,
  };
};

const monumentsFailure = (error) => {
  return {
    type: FETCH_MONUMENTS_FAILURE,
    payload: error,
  };
};

export const fetchMonuments = (monumentService) => (
  selectedCities = [],
  selectedStatuses = [],
  selectedConditions = [],
  selectedYearRange = yearsRange
) => (dispatch, getState) => {
  function executor(e) {
    dispatch(changeCancelRequest(e));
  }

  if (getState().monuments.cancelRequest) {
    getState().monuments.cancelRequest();
  }

  dispatch(monumentsRequest());

  monumentService
    .getMonumentsByFilter(
      selectedCities.map((c) => c.id),
      selectedStatuses,
      selectedConditions,
      selectedYearRange,
      executor
    )
    .then((monuments) => {
        dispatch(monumentsLoaded(monuments))
    })
    .catch((e) => {
      if (!Axios.isCancel(e)) {
        dispatch(monumentsFailure(e));
      }
    });
};
