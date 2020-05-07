import React from "react";
import movieAPI from "../../utils/movieAPI";
import { Link } from "react-router-dom";

const FilmListEl = ({ film, styles, props }) => (
  <li key={film.id} className={styles.listElement}>
    <Link
      to={{
        pathname: `movie/${film.id}`,
        state: { from: props.location },
      }}
      className={styles.title}
    >
      <img src={movieAPI.BASE_IMG_URL + film.poster_path} alt="movie poster" />
      {film.title}
    </Link>
  </li>
);

export default FilmListEl;
