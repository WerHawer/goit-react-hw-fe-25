import React, { Component } from "react";
import Input from "./Input/InputContainer";
import Header from "./Header/Header";
import ContactList from "./ContactList/ContactListContainer";
import Filter from "./Filter/FilterContainer";

class App extends Component {
  state = {};

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

export default App;
