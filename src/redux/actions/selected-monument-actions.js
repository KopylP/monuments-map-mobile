import React from "react";
import {
  CHANGE_SELECTED_MONUMENT,
  CLOSE_SELECTED_MONUMENT_DIALOG,
} from "../constants";

export const changeSelectedMonument = (monument) => {
  return {
    type: CHANGE_SELECTED_MONUMENT,
    payload: monument,
  };
};

export const closeSelectedMonumentDialog = () => {
  return {
    type: CLOSE_SELECTED_MONUMENT_DIALOG,
  };
};
