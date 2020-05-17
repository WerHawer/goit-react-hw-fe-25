import { connect } from "react-redux";
import * as phoneOperations from "../../redux/phoneOperations";
import ContactList from "./ContactList";

const mapStateToProps = (state) => ({
  contacts: state.contacts,
  filter: state.filter,
});

const mapDispatchToProps = {
  onDelete: phoneOperations.dleleteContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
