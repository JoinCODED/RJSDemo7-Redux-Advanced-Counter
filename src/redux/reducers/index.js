import { combineReducers } from "redux";

import counterReducer from "./counter";
import colorReducer from "./color";

const rootReducer = combineReducers({
  counterState: counterReducer,
  colorState: colorReducer
});

export default rootReducer;
