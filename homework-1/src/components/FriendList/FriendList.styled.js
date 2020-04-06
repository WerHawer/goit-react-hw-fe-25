import styled from "styled-components";

export const FriendsList = styled.ul`
  margin: 0 auto;
  width: 250px;
  list-style: none;
  margin-bottom: 15px;
`;

export const FriendsListElementS = styled.li`
  display: flex;
  align-items: center;
  box-shadow: 0px 1px 3px 0px rgba(191, 205, 222, 0.75);
  margin-bottom: 8px;
  padding: 4px 8px;
`;

export const OnlineIndicator = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => (props.online ? "green" : "red")};
  margin-right: 8px;
`;

export const Avatar = styled.img`
  border-radius: 5px;
  margin-right: 8px;
`;

export const Name = styled.p`
  font-size: 22px;
`;
