import {
  CHANGE_CONDITIONS,
  CHANGE_STATUSES,
  CLEAR_FILTERS,
} from "../constants";

export const changeStatuses = (statuses) => {
  return {
    type: CHANGE_STATUSES,
    payload: statuses,
  };
};

export const changeConditions = (conditions) => {
  return {
    type: CHANGE_CONDITIONS,
    payload: conditions,
  };
};

export const clearFilters = () => {
  return {
    type: CLEAR_FILTERS,
  };
};
