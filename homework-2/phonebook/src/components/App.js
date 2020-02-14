import shortid from "shortid";
import PropTypes from "prop-types";
import React, { Component } from "react";
import ContactList from "./ContactList/ContactList";
import Input from "./Input/Input";
import Filter from "./Filter/Filter";
import localStorage from "../utils/localStorage";

const filterTasks = (contacts, filter) => {
  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
};

export default class App extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.exact({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
      })
    ),
    filter: PropTypes.string,
    changeFilter: PropTypes.func,
    ressetFilter: PropTypes.func,
    addContact: PropTypes.func,
    deleteContact: PropTypes.func
  };

  componentDidMount() {
    const contactsFromLS = localStorage.load("contacts");

    if (contactsFromLS) {
      this.setState({
        contacts: contactsFromLS
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.save("contacts", this.state.contacts);
    }
  }

  state = {
    contacts: [],
    filter: ""
  };

  changeFilter = e => {
    this.setState({
      filter: e.target.value
    });
  };

  ressetFilter = e => {
    this.setState({
      filter: ""
    });
  };

  addContact = (name, number) => {
    const { contacts } = this.state;
    const contactToAdd = { name, number, id: shortid.generate() };

    this.setState(state => ({
      contacts: [...contacts, contactToAdd]
    }));
  };

  deleteContact = targetId => {
    this.setState(state => ({
      contacts: state.contacts.filter(({ id }) => id !== targetId)
    }));
  };
  render() {
    const { contacts, filter } = this.state;
    const filteredTasks = filterTasks(contacts, filter);
    return (
      <div>
        <h1>Phonebook</h1>
        <Input onClickButton={this.addContact} contacts={contacts} />

        <h2>Contacts</h2>
        <Filter
          value={filter}
          onChangeFilter={this.changeFilter}
          tasks={filteredTasks}
          ressetFilter={this.ressetFilter}
        />
        <ContactList contacts={filteredTasks} onDelete={this.deleteContact} />
      </div>
    );
  }
}
