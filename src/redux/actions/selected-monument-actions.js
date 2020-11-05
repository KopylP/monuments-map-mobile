import React from "react";
import { CHANGE_SELECTED_MONUMENT } from "../constants";

export const changeSelectedMonument = (monument) => {
  return {
    type: CHANGE_SELECTED_MONUMENT,
    payload: monument,
  };
};
