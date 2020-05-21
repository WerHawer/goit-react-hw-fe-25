import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import phoneReducer from "./phoneReducer";
import logger from "./middleWare/logger";

const persistConfig = {
  key: "contacts",
  storage,
  whitelist: ["contacts"],
};

const persistedReducer = persistReducer(persistConfig, phoneReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [...getDefaultMiddleware(), logger],
  //   можно записать несколько редюсеров в виде объекта, но тогда изменится путь.
});

export const persistor = persistStore(store);
