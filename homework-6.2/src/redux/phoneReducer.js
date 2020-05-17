import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import * as phoneActions from "./phoneActions";

const contactsReducer = createReducer([], {
  [phoneActions.addContactSuccess]: (state, { payload }) => [
    ...state,
    { ...payload },
  ],

  [phoneActions.deleteContactSuccess]: (state, { payload }) => [
    ...state.filter(({ id }) => id !== payload),
  ],

  [phoneActions.getContacts]: (state, { payload }) => [...payload],
});

const filterReducer = createReducer("", {
  [phoneActions.changeFilter]: (state, { payload }) => payload,
});

const errorReducer = createReducer(null, {
  [phoneActions.getContactsError]: (state, { payload }) => payload,
  [phoneActions.addContactError]: (state, { payload }) => payload,
  [phoneActions.deleteContactError]: (state, { payload }) => payload,
});

const loadingReducer = createReducer(false, {
  [phoneActions.getContactsStart || phoneActions.addContactStart]: (
    state,
    { payload }
  ) => true,
  [phoneActions.getContacts]: (state, { payload }) => false,
});

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  error: errorReducer,
  isLoading: loadingReducer,
});
