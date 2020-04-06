import React from "react";
import PropTypes from "prop-types";
import {
  OnlineIndicator,
  FriendsListElementS,
  Avatar,
  Name,
} from "./FriendList.styled";

const FrendListElement = ({ friend }) => (
  <FriendsListElementS>
    <OnlineIndicator online={friend.isOnline}></OnlineIndicator>
    <Avatar src={friend.avatar} alt="avatar" width="60"></Avatar>
    <Name>{friend.name}</Name>
  </FriendsListElementS>
);

FrendListElement.propTypes = {
  friend: PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

export default FrendListElement;
