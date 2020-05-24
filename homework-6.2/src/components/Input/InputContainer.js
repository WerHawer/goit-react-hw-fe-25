import { connect } from "react-redux";
import Input from "./Input";
import * as phoneActions from "../../redux/phoneActions";
import { getContacts } from "../../redux/phoneSelectors";

const mapStateToProps = (state) => ({
  contacts: getContacts(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    addContact: (contact) => {
      dispatch(phoneActions.addContactSuccess(contact));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
