import React from "react";
import PropTypes from "prop-types";
import {
  Table,
  TableHead,
  HeadTh,
  TableBodyTr,
  TableBodyTd
} from "./Transactions.styled";

const Transactions = ({ transactions }) => (
  <Table>
    <thead>
      <TableHead>
        <HeadTh>Type</HeadTh>
        <HeadTh>Amount</HeadTh>
        <HeadTh>Currency</HeadTh>
      </TableHead>
    </thead>

    <tbody>
      {transactions.map(item => (
        <TableBodyTr key={item.id}>
          <TableBodyTd>{item.type}</TableBodyTd>
          <TableBodyTd>{item.amount}</TableBodyTd>
          <TableBodyTd>{item.currency}</TableBodyTd>
        </TableBodyTr>
      ))}
    </tbody>
  </Table>
);

Transactions.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Transactions;
