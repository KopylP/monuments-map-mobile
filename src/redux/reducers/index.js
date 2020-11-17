import { combineReducers } from "redux";
import conditionsReducer from "./conditions-reducer";
import filterReducer from "./filter-reducer";
import monumentsReducer from "./monuments-reducer";
import selectedMonumentReducer from "./selected-monument-reducer";
import statusesReducer from "./statuses-reducer";
import transitionReducer from "./transition-reducer";

const reducer = combineReducers({
  monuments: monumentsReducer,
  selectedMonument: selectedMonumentReducer,
  transition: transitionReducer,
  filter: filterReducer,
  statuses: statusesReducer,
  conditions: conditionsReducer
});

export default reducer;
