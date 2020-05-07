import React from "react";
import styles from "./Cast.module.css";
import CastEl from "./CastEl";

const Cast = ({ actors }) => (
  <div className={styles.wrapper}>
    <h2>Cast</h2>
    <ul className={styles.list}>
      {actors.map((actor) => (
        <CastEl actor={actor} styles={styles} />
      ))}
    </ul>
  </div>
);

export default Cast;
