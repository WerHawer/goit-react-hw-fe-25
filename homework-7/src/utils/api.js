import axios from "axios";

axios.defaults.baseURL = "http://localhost:4040";

export const fetchContacts = async () => {
  try {
    const request = await axios.get("/contacts");
    return request.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteContactById = async (id) => {
  try {
    return await axios.delete(`/contacts/${id}`);
  } catch (error) {
    throw error;
  }
};

export const addNewContact = async (contact) => {
  try {
    return await axios.post("/contacts", contact);
  } catch (error) {
    throw error;
  }
};
