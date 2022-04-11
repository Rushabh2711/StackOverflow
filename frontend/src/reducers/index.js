import {loggedReducer}  from "./auth";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    LoggedInUSer: loggedReducer,
});

export default rootReducer;