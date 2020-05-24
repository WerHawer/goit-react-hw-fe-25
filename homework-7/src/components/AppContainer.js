import App from "./App";
import { connect } from "react-redux";
import { getContacts } from "../redux/phoneOperations";

const mapDispatchToProps = {
  getContacts: getContacts,
};

export default connect(null, mapDispatchToProps)(App);
