import { CHANGE_CONDITIONS, CHANGE_STATUSES } from "../constants";

export const changeStatuses = (statuses) => {
  return {
    type: CHANGE_STATUSES,
    payload: statuses,
  };
};

export const changeConditions = (conditions) => {
  return {
    type: CHANGE_CONDITIONS,
    payload: conditions
  };
};
