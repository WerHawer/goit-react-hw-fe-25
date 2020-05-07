import React from "react";
import styles from "./FilmList.module.css";
import FilmListEl from "./FilmListEl";

const FilmList = ({ films, props }) => (
  <ul className={styles.filmList}>
    {films.map((film) => (
      <FilmListEl key={film.id} film={film} styles={styles} props={props} />
    ))}
  </ul>
);

export default FilmList;
