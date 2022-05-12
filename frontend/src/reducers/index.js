import { loginReducer, loginStatusReducer } from "./auth";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  LoggedInUser: loginReducer,
  isLoggedIn: loginStatusReducer,
});

export default rootReducer;
