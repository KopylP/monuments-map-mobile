import {
  CHANGE_CONDITIONS,
  CHANGE_STATUSES,
  CLEAR_FILTERS,
  CHANGE_YEARS_RANGE
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

export const changeYearsRange = (range) => {
  return {
    type: CHANGE_YEARS_RANGE,
    payload: range,
  };
};

export const clearFilters = () => {
  return {
    type: CLEAR_FILTERS,
  };
};
