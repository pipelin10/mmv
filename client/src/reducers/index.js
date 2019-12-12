import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import relationReducer from "./relationReducer";
import questionReducer from "./questionReducers";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  relations: relationReducer,
  questions: questionReducer
});