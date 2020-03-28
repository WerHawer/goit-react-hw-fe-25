import React, { Component } from "react";
import Input from "./Input/Input";
import { CSSTransition } from "react-transition-group";
import styles from "./App.module.css";
import shortid from "shortid";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import localStorage from "../utils/localStorage";
import slideTransition from "../transitions/slideLogo.module.css";

const filterTasks = (contacts, filter) => {
  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
};

export default class App extends Component {
  componentDidMount() {
    const contactsFromLS = localStorage.load("contacts");

    if (contactsFromLS) {
      this.setState({
        contacts: contactsFromLS
      });
    }

    this.setState({ logo: true });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.save("contacts", this.state.contacts);
    }
  }

  state = {
    contacts: [],
    filter: "",
    logo: false
  };

  changeFilter = e => {
    this.setState({
      filter: e.target.value
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
    const { contacts, filter, logo } = this.state;
    const filteredTasks = filterTasks(contacts, filter);
    return (
      <div className="wrapper">
        <div className="screen">
          <CSSTransition in={logo} timeout={500} classNames={slideTransition}>
            <h1 className={styles.phonebook}>Phonebook</h1>
          </CSSTransition>
          <Input addContact={this.addContact} contacts={contacts} />

          <Filter
            value={filter}
            onChangeFilter={this.changeFilter}
            tasks={filteredTasks}
          />
          <ContactList contacts={filteredTasks} onDelete={this.deleteContact} />
        </div>
      </div>
    );
  }
}
