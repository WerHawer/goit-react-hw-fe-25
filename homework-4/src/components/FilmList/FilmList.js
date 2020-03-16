import React from "react";
import { Link } from "react-router-dom";
import styles from "./FilmList.module.css";
import movieAPI from "../../utils/movieAPI";

const FilmList = ({ films, props }) => (
  <ul className={styles.filmList}>
    {films.map(film => (
      <li key={film.id} className={styles.listElement}>
        <Link
          to={{
            pathname: `movie/${film.id}`,
            state: { from: props.location }
          }}
          className={styles.title}
        >
          <img
            src={movieAPI.BASE_IMG_URL + film.poster_path}
            alt="movie poster"
          />
          {film.title}
        </Link>
      </li>
    ))}
  </ul>
);

export default FilmList;
