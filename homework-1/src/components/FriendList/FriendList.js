import React from "react";
import PropTypes from "prop-types";
import {
  OnlineIndicator,
  FriendsList,
  FriendsListElement,
  Avatar,
  Name
} from "./FriendList.styled";

const FriendList = ({ friends }) => (
  <FriendsList>
    {friends.map(friend => (
      <FriendsListElement key={friend.id}>
        <OnlineIndicator online={friend.isOnline}></OnlineIndicator>
        <Avatar src={friend.avatar} alt="avatar" width="60"></Avatar>
        <Name>{friend.name}</Name>
      </FriendsListElement>
    ))}
  </FriendsList>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired
};
export default FriendList;
