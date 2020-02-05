import styled from "styled-components";
import stats from "../../data/statistical-data.json";

let mainWidth = 250;
const elements = stats.length;

export const Statistics = styled.section`
  margin: 0 auto;
  width: ${mainWidth}px;
  box-shadow: 0px 1px 3px 0px rgba(191, 205, 222, 0.75);
  padding-top: ${props => (props.title ? "25px" : "0")};
  margin-bottom: 15px;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 25px;
  color: #475965;
  font-size: 16px;
  text-transform: uppercase;
`;

export const List = styled.ul`
  list-style: none;
  font-weight: 300;
  display: flex;
  width: 100%;
`;

export const ListElemnt = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${mainWidth / elements}px;
  height: ${mainWidth / elements}px;
  max-height: 60px;
  padding-top: 3%;
`;

export const Label = styled.span`
  color: #fff;
  font-size: 12px;
`;

export const Percentage = styled.span`
  color: #fff;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
`;
