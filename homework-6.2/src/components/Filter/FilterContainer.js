import Filter from "./Filter";
import { connect } from "react-redux";
import * as phoneActions from "../../redux/phoneActions";

const mapStateToProps = (state) => ({
  contacts: state.contacts,
  value: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeFilter: (value) => dispatch(phoneActions.changeFilter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
