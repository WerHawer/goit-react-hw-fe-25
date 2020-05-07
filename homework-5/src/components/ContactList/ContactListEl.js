import React from "react";
import PropTypes from "prop-types";

const ContactListEl = ({ styles, name, number, id, onDelete }) => (
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
);

export default ContactListEl;

ContactListEl.propTypes = {
  styles: PropTypes.object,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
