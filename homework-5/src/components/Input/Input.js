import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Input.module.css";
import Alert from "../notifications/Alert";
import InputI from "../InputComponent/InputI";

class Input extends Component {
  static propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    addContact: PropTypes.func.isRequired
  };

  state = {
    name: "",
    number: "",
    nameAlreadyUse: false,
    emptyField: false
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;

    if (this.nameValidation(name, this.props.contacts)) return;

    if (!this.noEmptyValidation()) return;

    this.props.addContact(name, number);
    this.setState({
      name: "",
      number: ""
    });
  };

  noEmptyValidation = () => {
    const { name, number } = this.state;

    if (!name || !number) {
      this.setState({ emptyField: true });
      setTimeout(() => {
        this.setState({ emptyField: false });
      }, 1500);

      return;
    }

    return "ok";
  };

  nameValidation = (adedName, contacts) => {
    const findedName = contacts.find(({ name }) => name === adedName);

    if (findedName) {
      this.setState({ nameAlreadyUse: true });
      setTimeout(() => {
        this.setState({ nameAlreadyUse: false });
      }, 1500);
    }

    return findedName;
  };

  render() {
    const { name, number, nameAlreadyUse, emptyField } = this.state;
    return (
      <>
        <Alert nameAlreadyUse={nameAlreadyUse} emptyField={emptyField} />

        <form
          action="submit"
          onSubmit={this.handleSubmit}
          className={styles.form}
        >
          <h2 className={styles.text}>Name</h2>
          <InputI
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />

          <h2 className={styles.text}>Number</h2>
          <InputI
            type="number"
            name="number"
            value={number}
            onChange={this.handleChange}
          />

          <br />
          <button type="submit" className={styles.button}>
            Add
          </button>
        </form>
      </>
    );
  }
}

export default Input;
