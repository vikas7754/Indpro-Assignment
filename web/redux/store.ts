import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./states/user";
import dataReducer from "./states/data";

const store = configureStore({
  reducer: {
    user: userReducer,
    data: dataReducer,
  },
});

export default store;
