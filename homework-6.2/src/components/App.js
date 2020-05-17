import React, { Component } from "react";
import Input from "./Input/InputContainer";
import Header from "./Header/Header";
import ContactList from "./ContactList/ContactListContainer";
import Filter from "./Filter/FilterContainer";
import { getContacts } from "../redux/phoneOperations";
import { connect } from "react-redux";

class App extends Component {
  state = {};

  componentDidMount() {
    this.props.getConactsFromLS();
  }

  render() {
    return (
      <div className="wrapper">
        <div className="screen">
          <Header />
          <Input />
          <Filter />
          <ContactList />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  getConactsFromLS: getContacts,
};

export default connect(null, mapDispatchToProps)(App);
