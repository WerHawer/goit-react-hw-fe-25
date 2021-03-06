import React from "react";
import styles from "../Input/Input.module.css";

const InputI = ({ type, name, value, onChange, refP }) => (
  <input
    ref={refP}
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    className={styles.input}
  ></input>
);

export default InputI;
