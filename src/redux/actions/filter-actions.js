import {
  CHANGE_CONDITIONS,
  CHANGE_STATUSES,
  CLEAR_FILTERS,
  CHANGE_YEARS_RANGE,
  CHANGE_ALL_FILTERS,
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

export const changeAllFilters = (statuses, conditions, yearsRange) => {
  return {
    type: CHANGE_ALL_FILTERS,
    payload: {
      statuses,
      conditions,
      yearsRange,
    },
  };
};

export const clearFilters = () => {
  return {
    type: CLEAR_FILTERS,
  };
};
