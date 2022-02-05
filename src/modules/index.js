import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";
import ntodos from "./Ntodo";

const rootReducer = combineReducers({
  counter,
  todos,
  ntodos,
});

export default rootReducer;
