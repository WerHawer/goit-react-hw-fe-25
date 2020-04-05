import React from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import slideTransition from "../../transitions/slideAlert.module.css";
import styles from "./Input.module.css";
import * as appActions from "../../redux/appActions";

const Input = ({
  name,
  number,
  onChange,
  addContact,
  ressetInputs,
  nameAlreadyUse,
}) => (
  <>
    <CSSTransition
      in={nameAlreadyUse}
      timeout={250}
      classNames={slideTransition}
      unmountOnExit
    >
      <span className={styles.alert}>Name alredy use</span>
    </CSSTransition>

    <form
      action="submit"
      onSubmit={(e) => {
        e.preventDefault();
        addContact(name, number);
        ressetInputs(name, number);
      }}
      className={styles.form}
    >
      <h2 className={styles.text}>Name</h2>
      <input
        type="text"
        name="name"
        value={name}
        onChange={onChange}
        className={styles.input}
      ></input>

      <h2 className={styles.text}>Number</h2>
      <input
        type="number"
        name="number"
        value={number}
        onChange={onChange}
        className={styles.input}
      ></input>

      <br />
      <button type="submit" className={styles.button}>
        Add
      </button>
    </form>
  </>
);

const mapStateToProps = (state) => ({
  name: state.main.inputs.name,
  number: state.main.inputs.number,
  nameAlreadyUse: state.main.contacts.alreadyUse,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(appActions.changeInput(e)),
  addContact: (name, num) => dispatch(appActions.addContact(name, num)),
  ressetInputs: (name, number) =>
    dispatch(appActions.ressetInput(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Input);
