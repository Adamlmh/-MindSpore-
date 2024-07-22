import { configureStore } from "@reduxjs/toolkit";

//导入子模块reducer
//写一个模板
import mobanReducer from "./modules/moban";

const store = configureStore({
  reducer: {
    moban: mobanReducer,
  },
});

export default store;
