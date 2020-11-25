import {
  CHANGE_SELECTED_MONUMENT,
  CLOSE_SELECTED_MONUMENT_DIALOG,
  DISABLE_DIALOG,
  ENABLE_DIALOG,
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

export const disableDialog = () => {
  return {
    type: DISABLE_DIALOG
  }
}

export const enableDialog = () => {
  return {
    type: ENABLE_DIALOG
  }
}
