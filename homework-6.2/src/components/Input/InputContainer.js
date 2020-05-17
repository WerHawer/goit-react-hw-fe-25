import { connect } from "react-redux";
import Input from "./Input";
import * as phoneOperations from "../../redux/phoneOperations";

const mapStateToProps = (state) => ({
  contacts: state.contacts,
});

const mapDispatchToProps = {
  addContact: phoneOperations.addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
