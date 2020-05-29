import * as phoneActions from "./phoneActions";
import { fetchContacts, deleteContactById, addNewContact } from "../utils/api";

// Fetch all contacts
export const getContacts = () => (dispatch) => {
  dispatch(phoneActions.getContactsStart());

  fetchContacts()
    .then((contacts) => dispatch(phoneActions.getContacts(contacts)))
    .catch((error) => dispatch(phoneActions.getContactsError(error)));
};

// ADD contact
export const addContact = (contactObj) => (dispatch) => {
  dispatch(phoneActions.addContactStart());

  addNewContact(contactObj)
    .then(() => dispatch(phoneActions.addContactSuccess(contactObj)))
    .catch((error) => dispatch(phoneActions.addContactError(error)));
};

// Delete contact

export const deleteContact = (id) => (dispatch) => {
  dispatch(phoneActions.deleteContactStart());

  deleteContactById(id)
    .then(() => dispatch(phoneActions.deleteContactSuccess(id)))
    .catch((error) => dispatch(phoneActions.deleteContactError(error)));
};
