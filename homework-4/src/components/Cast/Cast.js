import React from "react";
import movieAPI from "../../utils/movieAPI";
import styles from "./Cast.module.css";
import noAvatar from "../../img/noavatar.jpeg";

const Cast = ({ actors }) => (
  <div className={styles.wrapper}>
    <h2>Cast</h2>
    <ul className={styles.list}>
      {actors.map(actor => (
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
      ))}
    </ul>
  </div>
);

export default Cast;
