import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import phoneReducer from "./phoneReducer";
import logger from "./middleWare/logger";
import { fetchContacts } from "../utils/api";

fetchContacts();

export const store = configureStore({
  reducer: phoneReducer,
  middleware: [...getDefaultMiddleware(), logger],
  //   можно записать несколько редюсеров в виде объекта, но тогда изменится путь.
});
