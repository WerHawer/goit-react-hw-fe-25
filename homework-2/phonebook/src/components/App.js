import shortid from "shortid";
import React, { Component } from "react";
import ContactList from "./ContactList/ContactList";
import Input from "./Input/Input";
import Filter from "./Filter/Filter";

const filterTasks = (contacts, filter) => {
  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
};

export default class App extends Component {
  state = {
    contacts: [
      { name: "Kos", number: "32323443", id: shortid.generate() },
      { name: "Kate", number: "32323443", id: shortid.generate() },
      { name: "Gabs", number: "32323443", id: shortid.generate() },
      { name: "Rudy", number: "32323443", id: shortid.generate() }
    ],
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
