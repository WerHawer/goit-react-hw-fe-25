import React from "react";
import noAvatar from "../../img/noavatar.jpeg";
import movieAPI from "../../utils/movieAPI";

const CastEl = ({ actor, styles }) => (
  <li key={actor.id} className={styles.listElement}>
    <img
      src={
        actor.profile_path
          ? movieAPI.BASE_IMG_URL + actor.profile_path
          : noAvatar
      }
      alt={`${actor.name}`}
      width="200"
    />
    <p>
      {actor.name} ({actor.character})
    </p>
  </li>
);

export default CastEl;
