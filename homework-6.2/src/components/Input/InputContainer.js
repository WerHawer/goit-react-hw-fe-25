import { connect } from "react-redux";
import Input from "./Input";
import * as phoneActions from "../../redux/phoneActions";

const mapStateToProps = (state) => ({
  contacts: state.contacts,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addContact: (contact) => {
      dispatch(phoneActions.addContactSuccess(contact));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
