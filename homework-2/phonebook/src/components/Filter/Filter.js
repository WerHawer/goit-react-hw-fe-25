import React, { Fragment } from "react";
import PropTypes from "prop-types";

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

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    })
  ),
  onChangeFilter: PropTypes.func.isRequired,
  ressetFilter: PropTypes.func.isRequired
};
export default Filter;
