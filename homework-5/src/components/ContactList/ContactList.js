import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";
import slideTransition from "../../transitions/slideContact.module.css";

const ContactList = ({ contacts, onDelete }) => (
  <>
    <TransitionGroup component="ul" className={styles.ul}>
      {contacts.map(({ name, number, id }) => (
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
      <h3 style={{ textAlign: "center" }}>You don`t have any contacts</h3>
    )}
  </>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
