import React from "react";
import Input from "./Input/Input";
import { CSSTransition } from "react-transition-group";
import styles from "./App.module.css";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
// import localStorage from "../utils/localStorage";
import slideTransition from "../transitions/slideLogo.module.css";
import { connect } from "react-redux";

const App = ({ logo }) => (
  <div className="wrapper">
    <div className="screen">
      <CSSTransition in={logo} timeout={500} classNames={slideTransition}>
        <h1 className={styles.phonebook}>Phonebook</h1>
      </CSSTransition>
      <Input />

      <Filter />
      <ContactList />
    </div>
  </div>
);

const mapStateToProps = state => ({
  logo: state.main.logo
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
