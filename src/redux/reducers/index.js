import { combineReducers } from "redux";
import monumentsReducer from "./monuments-reducer";
import selectedMonumentReducer from "./selected-monument-reducer";
import transitionReducer from "./transition-reducer";

const reducer = combineReducers({
  monuments: monumentsReducer,
  selectedMonument: selectedMonumentReducer,
  transition: transitionReducer
});

export default reducer;
