import { combineReducers } from "redux";
import conditionsReducer from "./conditions-reducer";
import filterReducer from "./filter-reducer";
import modalReducer from "./modal-reducer";
import monumentsReducer from "./monuments-reducer";
import statusesReducer from "./statuses-reducer";
import transitionReducer from "./transition-reducer";

const reducer = combineReducers({
  monuments: monumentsReducer,
  transition: transitionReducer,
  filter: filterReducer,
  statuses: statusesReducer,
  conditions: conditionsReducer,
  modal: modalReducer
});

export default reducer;
