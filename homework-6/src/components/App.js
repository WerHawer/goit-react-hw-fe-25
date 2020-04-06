import React, { useEffect } from "react";
import Input from "./Inpt/Input";
import { CSSTransition } from "react-transition-group";
import styles from "./App.module.css";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import slideTransition from "../transitions/slideLogo.module.css";
import * as appActions from "../redux/appActions";
import { connect } from "react-redux";

const App = ({ logo, showLogo }) => {
  useEffect(() => {
    showLogo();
  }, []);

  return (
    <div className="wrapper">
      <div className="screen">
        <CSSTransition
          in={logo}
          timeout={500}
          classNames={slideTransition}
          unmountOnExit
        >
          <h1 className={styles.phonebook}>Phonebook</h1>
        </CSSTransition>
        <Input />

        <Filter />
        <ContactList />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  logo: state.main.logo,
});

const mapDispatchToProps = (dispatch) => ({
  showLogo: () => dispatch(appActions.showLogo()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
