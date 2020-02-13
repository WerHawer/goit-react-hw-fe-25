import React, { Fragment } from "react";

const Filter = ({ value, onChangeFilter, tasks, ressetFilter }) => (
  <Fragment>
    {tasks.length >= 2 && (
      <input
        type="text"
        placeholder="find by name"
        value={value}
        onChange={onChangeFilter}
      />
    )}
    <button type="button" onClick={ressetFilter}>
      Resset
    </button>
  </Fragment>
);

export default Filter;
