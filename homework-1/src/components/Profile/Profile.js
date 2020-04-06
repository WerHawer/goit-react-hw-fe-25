import React from "react";
import PropTypes from "prop-types";
import {
  Wrapper,
  Avatar,
  Description,
  Name,
  Tag,
  Location,
  Stats,
} from "./Profile.styled";
import StatsEl from "./StatsEl";

const Profile = ({ user }) => (
  <Wrapper>
    <Description>
      <Avatar src={user.avatar} alt={user.name} />
      <Name>{user.name}</Name>
      <Tag>{"@" + user.tag}</Tag>
      <Location>{user.location}</Location>
    </Description>

    <Stats>
      <StatsEl label="Followers" quantity={user.stats.followers} />
      <StatsEl label="Views" quantity={user.stats.views} />
      <StatsEl label="Likes" quantity={user.stats.likes} />
    </Stats>
  </Wrapper>
);

Profile.propTypes = {
  user: PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
export default Profile;
