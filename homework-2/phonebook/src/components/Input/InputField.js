import React from "react";

const idGenered = Date.now();

const InputField = ({ type, name, value, onChange, label }) => (
  <>
    <label htmlFor={idGenered + name}>{label}</label>
    <input
      id={idGenered + name}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
    ></input>
  </>
);

export default InputField;
