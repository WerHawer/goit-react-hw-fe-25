import * as phoneActions from "./phoneActions";
import localStorage from "../utils/localStorage";

// Fetch all contacts
export const getContacts = () => (dispatch) => {
  dispatch(phoneActions.getContactsStart());

  try {
    const contactsLS = localStorage.load("contacts") || [];
    dispatch(phoneActions.getContacts(contactsLS));
  } catch (error) {
    dispatch(phoneActions.getContactsError(error));
  }
};

// ADD contact
export const addContact = (contactObj) => (dispatch, getState) => {
  dispatch(phoneActions.addContactStart());

  try {
    const addedContactState = [...getState().contacts, contactObj];
    localStorage.save("contacts", addedContactState);
    dispatch(phoneActions.addContactSuccess(contactObj));
  } catch (error) {
    dispatch(phoneActions.addContactError(error));
  }
};

// Delete contact

export const dleleteContact = (id) => (dispatch, getState) => {
  dispatch(phoneActions.deleteContactStart());

  try {
    const contactsAfterDelete = getState().contacts.filter(
      (contact) => contact.id !== id
    );
    localStorage.save("contacts", contactsAfterDelete);
    dispatch(phoneActions.deleteContactSuccess(id));
  } catch (error) {
    dispatch(phoneActions.deleteContactError(error));
  }
};
