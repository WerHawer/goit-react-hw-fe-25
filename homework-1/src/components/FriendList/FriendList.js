import React from "react";
import PropTypes from "prop-types";
import { FriendsList } from "./FriendList.styled";
import FrendListElement from "./FrendListElement";

const FriendList = ({ friends }) => (
  <FriendsList>
    {friends.map((friend) => (
      <FrendListElement friend={friend} key={friend.id} />
    ))}
  </FriendsList>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default FriendList;
