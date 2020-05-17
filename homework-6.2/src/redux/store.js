import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import phoneReducer from "./phoneReducer";
import logger from "./middleWare/logger";

const store = configureStore({
  reducer: phoneReducer,
  middleware: [...getDefaultMiddleware(), logger],
  //   можно записать несколько редюсеров в виде объекта, но тогда изменится путь.
});

export default store;
