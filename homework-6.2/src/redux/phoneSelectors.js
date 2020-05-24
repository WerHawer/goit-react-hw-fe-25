import { createSelector } from "reselect";

export const getContacts = (state) => state.contacts;

export const getFilterValue = (state) => state.filter;

// export const getFilteredContacts = (state) => {
//   const contacts = getContacts(state);
//   const filter = getFilterValue(state);

// return contacts.filter(({ name }) =>
//   name.toLowerCase().includes(filter.toLowerCase())
//   );
// };

export const getFilteredContacts = createSelector(
  [getContacts, getFilterValue],
  (contacts, filter) =>
    contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    )
);
