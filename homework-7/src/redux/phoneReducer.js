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
  // to TRUE
  [phoneActions.getContactsStart]: (state, { payload }) => true,
  [phoneActions.addContactStart]: (state, { payload }) => true,
  [phoneActions.deleteContactStart]: (state, { payload }) => true,

  // to FALSE
  [phoneActions.getContacts]: (state, { payload }) => false,
  [phoneActions.getContactsError]: (state, { payload }) => false,
  [phoneActions.addContactSuccess]: (state, { payload }) => false,
  [phoneActions.addContactError]: (state, { payload }) => false,
  [phoneActions.deleteContactSuccess]: (state, { payload }) => false,
  [phoneActions.deleteContactError]: (state, { payload }) => false,
});

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  error: errorReducer,
  isLoading: loadingReducer,
});
