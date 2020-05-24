import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";
import Loader from "react-loader";
import styles from "./ContactList.module.css";
import slideTransition from "../../transitions/slideContact.module.css";
import ContactListEl from "./ContactListEl";

const ContactList = ({ contacts, filteredContacts, isLoading }) => {
  return (
    <Loader loaded={!isLoading}>
      <TransitionGroup component="ul" className={styles.ul}>
        {filteredContacts.map(({ name, number, id }) => (
          <CSSTransition key={id} timeout={400} classNames={slideTransition}>
            <ContactListEl
              name={name}
              styles={styles}
              id={id}
              number={number}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>

      {contacts.length < 1 && (
        <h3 style={{ textAlign: "center" }}>You don`t have any contacts</h3>
      )}
    </Loader>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
