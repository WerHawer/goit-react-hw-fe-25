import React from "react";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";
import scaleTransition from "../../transitions/scale.module.css";
import styles from "./Filter.module.css";
import InputI from "../InputComponent/InputI";

const Filter = ({ value, onChangeFilter, contacts }) => {
  return (
    <>
      <CSSTransition
        in={contacts.length >= 2}
        timeout={250}
        classNames={scaleTransition}
        unmountOnExit
      >
        <div className={styles.wrapper}>
          <h3 className={styles.text}>Find by name</h3>
          <InputI
            type="text"
            value={value}
            onChange={(e) => onChangeFilter(e.target.value)}
          />
        </div>
      </CSSTransition>
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
