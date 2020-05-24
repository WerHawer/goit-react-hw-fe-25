import localStorage from "../../utils/localStorage";

const logger = (state) => (next) => (action) => {
  console.log(action);
  const contacts = state.getState().contacts;
  localStorage.save("testMD", contacts);
  next(action);
};

export default logger;
