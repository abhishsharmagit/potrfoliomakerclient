import { combineReducers } from "@reduxjs/toolkit";

import { reducer as userReducer } from "./slice/user";

export default combineReducers({
  user: userReducer,
});
