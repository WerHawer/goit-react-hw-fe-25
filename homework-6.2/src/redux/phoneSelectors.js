import { createSelector } from "reselect";

export const getContacts = (state) => state.contacts;

export const getFilterValue = (state) => state.filter;

export const getFilteredContacts = createSelector(
  [getContacts, getFilterValue],
  (contacts, filter) =>
    contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    )
);
