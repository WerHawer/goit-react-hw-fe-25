import { connect } from "react-redux";
import ContactList from "./ContactList";
import {
  getContacts,
  getFilteredContacts,
  getIsLoading,
} from "../../redux/phoneSelectors";

const mapStateToProps = (state) => ({
  contacts: getContacts(state),
  filteredContacts: getFilteredContacts(state),
  isLoading: getIsLoading(state),
});

export default connect(mapStateToProps, null)(ContactList);
