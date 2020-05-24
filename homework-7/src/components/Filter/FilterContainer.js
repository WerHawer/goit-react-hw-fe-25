import Filter from "./Filter";
import { connect } from "react-redux";
import * as phoneActions from "../../redux/phoneActions";
import { getContacts, getFilterValue } from "../../redux/phoneSelectors";

const mapStateToProps = (state) => ({
  contacts: getContacts(state),
  value: getFilterValue(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChangeFilter: (value) => dispatch(phoneActions.changeFilter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
