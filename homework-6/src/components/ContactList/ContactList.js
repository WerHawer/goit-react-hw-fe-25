import React, { useEffect } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styles from "./ContactList.module.css";
import slideTransition from "../../transitions/slideContact.module.css";
import * as appActions from "../../redux/appActions";
import { connect } from "react-redux";
import localStorage from "../../utils/localStorage";

const filterTasks = (contacts, filter) => {
  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
};

const ContactList = ({ contacts, filter, onDelete, addFromLS }) => {
  useEffect(() => {
    const contactsLS = localStorage.load("contacts") || [];
    addFromLS(contactsLS);
  }, []);

  useEffect(() => {
    localStorage.save("contacts", contacts);
  }, [contacts]);

  const filteredContacts = filterTasks(contacts, filter);

  return (
    <>
      <TransitionGroup component="ul" className={styles.ul}>
        {filteredContacts.map(({ name, number, id }) => (
          <CSSTransition key={id} timeout={400} classNames={slideTransition}>
            <li className={styles.li}>
              <span className={styles.name}>{name}</span>
              <span className={styles.number}>{number}</span>
              <button
                type="button"
                data-id={id}
                onClick={(e) => onDelete(e.target.dataset.id)}
                className={styles.button}
              ></button>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
      {contacts.length < 1 && (
        <h3 style={{ textAlign: "center" }}>you don`t have any contacts</h3>
      )}
    </>
  );

  //
};

const mapStateToProps = (state) => ({
  contacts: state.main.contacts.contacts,
  filter: state.main.inputs.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => dispatch(appActions.deleteContact(id)),
  addFromLS: (arrLS) => dispatch(appActions.addContactList(arrLS)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
