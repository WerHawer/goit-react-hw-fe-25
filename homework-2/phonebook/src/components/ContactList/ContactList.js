import React from "react";
// import PropTypes from "prop-types";

const ContactList = ({ contacts, onDelete }) =>
  contacts.length > 0 && (
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
  );

// ContactList.propTypes = {};

export default ContactList;
