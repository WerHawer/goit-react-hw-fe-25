import React from "react";
import PropTypes from "prop-types";
import StatisticsElement from "./StatisticsElement";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <StatisticsElement name="Good" value={good} />
    <StatisticsElement name="Neutral" value={neutral} />
    <StatisticsElement name="Bad" value={bad} />
    <StatisticsElement name="Total" value={total()} />
    <StatisticsElement name="Positive" value={positivePercentage()} />
  </>
);

Statistics.propTypes = {
  good: PropTypes.string.isRequired,
  neutral: PropTypes.string.isRequired,
  bad: PropTypes.string.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

export default Statistics;
