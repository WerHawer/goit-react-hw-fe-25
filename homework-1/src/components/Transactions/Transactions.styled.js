import styled from "styled-components";

export const Table = styled.table`
  width: 870px;
  margin: 0 auto;
  box-shadow: 0px 1px 3px 0px rgba(191, 205, 222, 0.75);
  border-spacing: 0;
`;

export const TableHead = styled.tr`
  width: 100%;
  color: #fff;
  font-size: 13px;
  background-color: #00bcd4;
  text-transform: uppercase;
`;

export const HeadTh = styled.th`
  width: 33.333%;
  padding: 15px;
  border-right: 1px solid #fff;
  &:last-child {
    border-right: none;
  }
`;

export const TableBodyTr = styled.tr`
  &:nth-child(even) {
    background-color: #ecf2f3;
  }
`;

export const TableBodyTd = styled.td`
  color: #5c6975;
  font-size: 15px;
  padding: 15px;
  text-align: center;
  border-right: 1px solid #e0e6e7;
  &:last-child {
    border-right: none;
  }
`;
