import { combineReducers } from "redux";
import monumentsReducer from "./monuments-reducer";
import selectedMonumentReducer from "./selected-monument-reducer";

const reducer = combineReducers({
  monuments: monumentsReducer,
  selectedMonument: selectedMonumentReducer
});

export default reducer;
