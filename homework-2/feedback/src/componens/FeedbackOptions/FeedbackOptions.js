import React, { Fragment } from "react";
import PropTypes from "prop-types";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <Fragment>
    {options.map(option => (
      <button
        key={option}
        type="button"
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    ))}
  </Fragment>
);

FeedbackOptions.propTypes = {
  option: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired
};

export default FeedbackOptions;
