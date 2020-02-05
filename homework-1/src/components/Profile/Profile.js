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
  StatsElement,
  Label,
  Quantity
} from "./Profile.styled";

const Profile = ({ user }) => (
  <Wrapper>
    <Description>
      <Avatar src={user.avatar} alt={user.name} />
      <Name>{user.name}</Name>
      <Tag>{"@" + user.tag}</Tag>
      <Location>{user.location}</Location>
    </Description>

    <Stats>
      <StatsElement>
        <Label>Followers</Label>
        <Quantity>{user.stats.followers}</Quantity>
      </StatsElement>
      <StatsElement>
        <Label>Views</Label>
        <Quantity>{user.stats.views}</Quantity>
      </StatsElement>
      <StatsElement>
        <Label>Likes</Label>
        <Quantity>{user.stats.likes}</Quantity>
      </StatsElement>
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
      likes: PropTypes.number.isRequired
    })
  })
};
export default Profile;
