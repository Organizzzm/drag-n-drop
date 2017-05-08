import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";

import { getList } from "./list";
import { changeStatus } from "./hightlight";
import { changeBtnStatus } from "./buttons-state";

// main reducers
export const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer,
  list: getList,
  selected: changeStatus,
  changeBtn: changeBtnStatus
});
