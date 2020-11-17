import Axios from "axios";
import {
  CHANGE_STATUSES_CANCEL_REQUEST,
  FETCH_CONDITIONS_SUCCESS,
  FETCH_STATUSES_FAILURE,
  FETCH_STATUSES_REQUEST,
  FETCH_STATUSES_SUCCESS,
} from "../constants";

const changeCancelRequest = (e) => {
  return {
    type: CHANGE_STATUSES_CANCEL_REQUEST,
    payload: e,
  };
};

const statusesRequest = () => {
  return {
    type: FETCH_STATUSES_REQUEST,
  };
};

const statusesLoaded = (statuses) => {
  return {
    type: FETCH_STATUSES_SUCCESS,
    payload: statuses,
  };
};

const statusesFailure = (error) => {
  return {
    type: FETCH_STATUSES_FAILURE,
    payload: error,
  };
};

export const fetchStatuses = (monumentService) => () => (
  dispatch,
  getState
) => {
  function executor(e) {
    dispatch(changeCancelRequest(e));
  }

  if (getState().statuses.cancelRequest) {
    getState().statuses.cancelRequest();
  }

  dispatch(statusesRequest());

  monumentService
    .getAllStatuses(executor)
    .then((statuses) => {
      dispatch(statusesLoaded(statuses));
    })
    .catch((e) => {
      if (!Axios.isCancel(e)) {
        dispatch(statusesFailure(e));
      }
    });
};
