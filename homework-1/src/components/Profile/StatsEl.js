import React from "react";
import { StatsElement, Label, Quantity } from "./Profile.styled";
import PropTypes from "prop-types";

const StatsEl = ({ label, quantity }) => (
  <StatsElement>
    <Label>{label}</Label>
    <Quantity>{quantity}</Quantity>
  </StatsElement>
);

export default StatsEl;

StatsEl.propTypes = {
  label: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};
