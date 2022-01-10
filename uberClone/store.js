import { configurationStore } from "@reduxjs/toolkit";
import navReducer from "./slice/navSlice";

export const store = configurationStore({
  reducer: {
    nav: navReducer,
  },
});
