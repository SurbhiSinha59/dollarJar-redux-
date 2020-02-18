import newUserReducer from "./newUserReducer";
import personReducer from "./personReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  newUserReducer,
  personReducer
});
export default allReducers;
