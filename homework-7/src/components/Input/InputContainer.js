import { connect } from "react-redux";
import Input from "./Input";
import { addContact } from "../../redux/phoneOperations";
import { getContacts } from "../../redux/phoneSelectors";

const mapStateToProps = (state) => ({
  contacts: getContacts(state),
});

const mapDispatchToProps = {
  addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
