import React from "react";
import PropTypes from "prop-types";

const ContactList = ({ contacts, onDelete }) =>
  contacts.length > 0 ? (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <li key={id}>
          <span>
            {name}: {number}
          </span>
          <button
            type="button"
            data-id={id}
            onClick={e => onDelete(e.target.dataset.id)}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  ) : (
    <h3>you don`t have any contacts</h3>
  );

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    })
  ),
  onDelete: PropTypes.func.isRequired
};

export default ContactList;
