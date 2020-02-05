import React from "react";
import PropTypes from "prop-types";
import {
  Statistics,
  Title,
  List,
  ListElemnt,
  Label,
  Percentage
} from "./Statistic.styled";
import { getRandomColor } from "../../randomColor";

const Statistic = ({ statistics, title }) => (
  <Statistics title={title}>
    {title && <Title>{title}</Title>}

    <List>
      {statistics.map(stat => (
        <ListElemnt key={stat.id} style={{ backgroundColor: getRandomColor() }}>
          <Label>{stat.label}</Label>
          <Percentage>{stat.percentage}%</Percentage>
        </ListElemnt>
      ))}
    </List>
  </Statistics>
);

Statistic.propTypes = {
  statistics: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired
    })
  ).isRequired,
  title: PropTypes.string
};

export default Statistic;
