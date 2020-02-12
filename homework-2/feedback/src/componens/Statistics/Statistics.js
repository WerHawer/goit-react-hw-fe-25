import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <Fragment>
    <span>Good: {good}</span>
    <br></br>
    <span>Neutral: {neutral}</span>
    <br></br>
    <span>Bad: {bad}</span>
    <br></br>
    <span>Total: {total()}</span>
    <br></br>
    <span>Positive: {positivePercentage()}%</span>
  </Fragment>
);

Statistics.propTypes = {
  good: PropTypes.string.isRequired,
  neutral: PropTypes.string.isRequired,
  bad: PropTypes.string.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired
};

export default Statistics;
