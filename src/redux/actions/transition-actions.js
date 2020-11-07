import { TRANSITION_END, TRANSITION_START } from "../constants";

export const transitionStart = () => {
  return {
    type: TRANSITION_START,
  };
};

export const transitionEnd = () => {
  return {
    type: TRANSITION_END,
  };
};
