import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import appReducer from "./appReducer";

const rootReducer = combineReducers({
  main: appReducer
});

const store = createStore(rootReducer, devToolsEnhancer());

export default store;
