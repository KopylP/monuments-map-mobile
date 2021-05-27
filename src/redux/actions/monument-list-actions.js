import Axios from "axios";
import {
  CHANGE_MONUMENT_LIST_CANCEL_REQUEST,
  FETCH_MONUMENT_LIST_REQUEST,
  FETCH_MONUMENT_LIST_SUCCESS,
  FETCH_MONUMENT_LIST_FAILURE,
  REQUEST_MONUMENT_LIST_FETCH,
  CHANGE_MONUMENT_LIST_ALL_FILTERS,
  CLEAR_MONUMENT_LIST_ALL_FILTERS,
} from "../constants";
import { yearsRange as defaultYearsRange } from "../../config";

const changeMonumentListCancelRequest = (e) => {
  return {
    type: CHANGE_MONUMENT_LIST_CANCEL_REQUEST,
    payload: e,
  };
};

const monumentListRequest = () => {
  return {
    type: FETCH_MONUMENT_LIST_REQUEST,
  };
};

const monumentListLoaded = (response) => {
  const monuments = response.data;
  // const pagination = response.headers.

  return {
    type: FETCH_MONUMENT_LIST_SUCCESS,
    payload: monuments,
  };
};

const monumentListFailure = (error) => {
  return {
    type: FETCH_MONUMENT_LIST_FAILURE,
    payload: error,
  };
};

export const fetchMonumentList =
  (monumentService) => () => (dispatch, getState) => {
    function executor(e) {
      dispatch(changeMonumentListCancelRequest(e));
    }

    const {
      cancelRequest = null,
      statuses = [],
      conditions = [],
      cities = [],
      yearsRange = defaultYearsRange,
      pagination,
    } = getState().monumentList;

    if (cancelRequest) {
      cancelRequest();
    }

    dispatch(monumentListRequest());

    monumentService
      .getPaginatedMonumentsByFilter(
        cities.map((c) => c.id),
        statuses,
        conditions,
        yearsRange,
        executor,
        {
          pageNumber: pagination ? pagination.currentPage + 1 : 1,
          pageSize: 10,
        }
      )
      .then((monuments) => {
        dispatch(monumentListLoaded(monuments));
      })
      .catch((e) => {
        if (!Axios.isCancel(e)) {
          dispatch(monumentListFailure(e));
        }
      });
  };

export const requestMonumentListFetch = () => ({
  type: REQUEST_MONUMENT_LIST_FETCH,
});

export const changeMonumentListAllFilters = (
  statuses,
  conditions,
  yearsRange
) => {
  return {
    type: CHANGE_MONUMENT_LIST_ALL_FILTERS,
    payload: {
      statuses,
      conditions,
      yearsRange,
    },
  };
};

export const clearMonumentListFilters = () => {
  return {
    type: CLEAR_MONUMENT_LIST_ALL_FILTERS,
  };
};
