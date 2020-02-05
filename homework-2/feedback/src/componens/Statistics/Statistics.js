import React, { Fragment } from "react";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <Fragment>
    <p>Statistics</p>
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

export default Statistics;
