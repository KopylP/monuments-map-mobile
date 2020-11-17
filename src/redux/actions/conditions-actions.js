import Axios from "axios";
import {
  CHANGE_CONDITIONS_CANCEL_REQUEST,
  FETCH_CONDITIONS_FAILURE,
  FETCH_CONDITIONS_REQUEST,
  FETCH_CONDITIONS_SUCCESS,
} from "../constants";

const changeCancelRequest = (e) => {
  return {
    type: CHANGE_CONDITIONS_CANCEL_REQUEST,
    payload: e,
  };
};

const conditionsRequest = () => {
  return {
    type: FETCH_CONDITIONS_REQUEST,
  };
};

const conditionsLoaded = (conditions) => {
  return {
    type: FETCH_CONDITIONS_SUCCESS,
    payload: conditions,
  };
};

const conditionsFailure = (error) => {
  return {
    type: FETCH_CONDITIONS_FAILURE,
    payload: error,
  };
};

export const fetchConditions = (monumentService) => () => (
  dispatch,
  getState
) => {
  function executor(e) {
    dispatch(changeCancelRequest(e));
  }

  if (getState().conditions.cancelRequest) {
    getState().conditions.cancelRequest();
  }

  dispatch(conditionsRequest());

  monumentService
    .getAllConditions(executor)
    .then((conditions) => {
      dispatch(conditionsLoaded(conditions));
    })
    .catch((e) => {
      if (!Axios.isCancel(e)) {
        dispatch(conditionsFailure(e));
      }
    });
};
