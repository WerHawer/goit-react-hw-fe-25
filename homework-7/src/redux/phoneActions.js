import { createAction } from "@reduxjs/toolkit";

export const Type = {
  GET_CONTACTS_START: "GET_CONTACTS_START",
  GET_CONTACTS_SUCCESS: "GET_CONTACTS_SUCCESS",
  GET_CONTACTS_ERROR: "GET_CONTACTS_ERROR",
  ADD_CONTACT_START: "ADD_CONTACT_START",
  ADD_CONTACT_SUCCESS: "ADD_CONTACT_SUCCESS",
  ADD_CONTACT_ERROR: "ADD_CONTACT_ERROR",
  DELETE_CONTACT_START: "DELETE_CONTACT_START",
  DELETE_CONTACT_SUCCESS: "DELETE_CONTACT_SUCCESS",
  DELETE_CONTACT_ERROR: "DELETE_CONTACT_ERROR",
  CHANGE_FILTER: "CHANGE_FILTER",
};

// Get contacts
export const getContactsStart = createAction(Type.GET_CONTACTS_START);
export const getContacts = createAction(Type.GET_CONTACTS_SUCCESS);
export const getContactsError = createAction(Type.GET_CONTACTS_ERROR);

// Add contact
export const addContactStart = createAction(Type.ADD_CONTACT_START);
export const addContactSuccess = createAction(Type.ADD_CONTACT_SUCCESS);
export const addContactError = createAction(Type.ADD_CONTACT_ERROR);

// Delete contact
export const deleteContactStart = createAction(Type.DELETE_CONTACT_START);
export const deleteContactSuccess = createAction(Type.DELETE_CONTACT_SUCCESS);
export const deleteContactError = createAction(Type.DELETE_CONTACT_ERROR);

// change filter
export const changeFilter = createAction(Type.CHANGE_FILTER);
