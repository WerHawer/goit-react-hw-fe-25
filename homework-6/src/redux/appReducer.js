import { combineReducers } from "redux";
import { Type } from "./appActions";
import shortid from "shortid";

const contactsInit = {
  contacts: [],
  alreadyUse: false,
};

const contactsReducer = (state = contactsInit, { type, payload }) => {
  switch (type) {
    case Type.ADD_CONTACT:
      const findedName = state.contacts.find(
        ({ name }) => name === payload.name
      );

      if (findedName) return { ...state, alreadyUse: true };

      return {
        alreadyUse: false,
        contacts: [...state.contacts, { ...payload, id: shortid.generate() }],
      };

    case Type.DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(({ id }) => id !== payload),
      };

    case Type.ADD_CONTACT_LIST:
      return {
        ...state,
        contacts: [...payload],
      };

    default:
      return state;
  }
};

const initialInputs = {
  filter: "",
  name: "",
  number: "",
};

const inputsReducer = (state = initialInputs, { type, payload }) => {
  switch (type) {
    case Type.CHANGE_INPUT:
      return { ...state, [payload.name]: payload.value };

    case Type.RESSET_INPUT:
      return { ...state, name: payload.value, number: payload.value };

    default:
      return state;
  }
};

const logoReducer = (state = false, { type, payload }) => {
  switch (type) {
    case Type.SHOW_LOGO:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  contacts: contactsReducer,
  inputs: inputsReducer,
  logo: logoReducer,
});
