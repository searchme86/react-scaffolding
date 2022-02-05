import { combineReducers } from "@reduxjs/toolkit";
import counter from "./Counter";
import todos from "./Todos";

const rootReducer = combineReducers({ counter, todos });

export default rootReducer;
