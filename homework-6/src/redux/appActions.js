export const Type = {
  CHANGE_INPUT: "CHANGE_INPUT",
  ADD_CONTACT: "ADD_CONTACT",
  DELETE_CONTACT: "DELETE_CONTACT",
  NAME_ALREDY_USE: "NAME_ALREDY_USE",
  RESSET_INPUT: "RESSET_INPUT"
};

export const changeInput = e => ({
  type: Type.CHANGE_INPUT,
  payload: {
    name: e.target.name,
    value: e.target.value
  }
});

export const addContact = (name, number) => ({
  type: Type.ADD_CONTACT,
  payload: {
    name,
    number
  }
});

export const deleteContact = id => ({
  type: Type.DELETE_CONTACT,
  payload: id
});

export const ressetInput = () => ({
  type: Type.RESSET_INPUT,
  payload: {
    value: ""
  }
});
