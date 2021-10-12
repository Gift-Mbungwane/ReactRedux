import { combineReducers } from "redux";
import countReducer from "./CounterReducer";
import multiplyReducer from "./MutliplyReducer";
import googleGdFileReducer from "./GoogleGdFileReducer";

export default reducer = combineReducers({
  counter: countReducer,
  multiply: multiplyReducer,
  gdFiles: googleGdFileReducer,
});
