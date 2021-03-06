import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as phoneActions from "../../redux/phoneActions";

const ContactListEl = ({ styles, name, number, onDelete, id }) => {
  const onClickDel = useCallback(() => onDelete(id), [onDelete, id]);

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
  onDelete: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  onDelete: phoneActions.deleteContactSuccess,
};

export default connect(null, mapDispatchToProps)(ContactListEl);
