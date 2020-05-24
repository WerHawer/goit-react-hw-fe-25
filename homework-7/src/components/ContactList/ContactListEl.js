import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteContact } from "../../redux/phoneOperations";

const ContactListEl = ({ styles, name, number, deleteContact, id }) => {
  const onClickDel = useCallback(() => deleteContact(id), [deleteContact, id]);

  return (
    <li className={styles.li}>
      <span className={styles.name}>{name}</span>
      <span className={styles.number}>{number}</span>
      <button
        type="button"
        onClick={onClickDel}
        className={styles.button}
      ></button>
    </li>
  );
};

ContactListEl.propTypes = {
  styles: PropTypes.object,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  deleteContact,
};

export default connect(null, mapDispatchToProps)(ContactListEl);
