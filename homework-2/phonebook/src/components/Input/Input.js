import React, { Component } from "react";
import PropTypes from "prop-types";

class Input extends Component {
  static propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    onClickButton: PropTypes.func.isRequired
  };

  state = {
    name: "",
    number: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  nameValidation = (adedName, contacts) => {
    const findedName = contacts.find(({ name }) => name === adedName);

    if (findedName) {
      alert(`${adedName} is already in contacts.`);
    }

    return findedName;
  };

  render() {
    const { name, number } = this.state;
    return (
      <form
        action="submit"
        onSubmit={e => {
          e.preventDefault();

          if (this.nameValidation(name, this.props.contacts)) return;
          this.props.onClickButton(name, number);
          this.setState({
            name: "",
            number: ""
          });
        }}
      >
        <h2>Name</h2>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
        ></input>

        <h2>Number</h2>
        <input
          type="number"
          name="number"
          value={number}
          onChange={this.handleChange}
        ></input>

        <br />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default Input;
