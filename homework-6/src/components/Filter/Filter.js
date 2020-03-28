import React from "react";
import { CSSTransition } from "react-transition-group";
import scaleTransition from "../../transitions/scale.module.css";
import styles from "./Filter.module.css";
import * as appActions from "../../redux/appActions";
import { connect } from "react-redux";

const Filter = ({ value, onChange, contacts = [] }) => (
  <>
    <CSSTransition
      in={contacts.length >= 2 || !!value}
      timeout={250}
      classNames={scaleTransition}
      unmountOnExit
    >
      <div className={styles.wrapper}>
        <h3 className={styles.text}>Find by name</h3>
        <input
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
          className={styles.input}
        />
      </div>
    </CSSTransition>
  </>
);

const mapStateToProps = state => ({
  contacts: state.main.contacts.contacts,
  value: state.main.inputs.filter
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(appActions.changeInput(e))
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
