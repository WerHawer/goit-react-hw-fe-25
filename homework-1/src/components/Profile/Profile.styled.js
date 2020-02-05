import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 250px;
  border-radius: 4px;
  box-shadow: 0px 1px 3px 0px rgba(191, 205, 222, 0.75);
  margin-bottom: 15px;
`;

export const Description = styled.div`
  padding-top: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export const Avatar = styled.img`
  display: block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 30px;
`;

export const Name = styled.p`
  color: #122236;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 11px;
`;

export const Tag = styled.p`
  color: #768696;
  font-size: 14px;
  margin-bottom: 11px;
`;

export const Location = styled.p`
  color: #768696;
  font-size: 14px;
  margin-bottom: 30px;
`;

export const Stats = styled.ul`
  list-style: none;
  display: flex;
  background-color: #f3f6f9;
  border-top: 1px solid #e4e9f0;
`;

export const StatsElement = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 33.3333333%;
  min-height: 76px;
  border-right: 1px solid #e4e9f0;

  &:last-child {
    border-right: none;
  }
`;

export const Label = styled.span`
  font-size: 12px;
  color: #768696;
  line-height: 32px;
`;

export const Quantity = styled.span`
  color: #1f3349;
  font-size: 14px;
  font-weight: 700;
`;
