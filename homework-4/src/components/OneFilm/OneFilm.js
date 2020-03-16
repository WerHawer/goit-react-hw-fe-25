import React from "react";
import { Link } from "react-router-dom";
import movieAPI from "../../utils/movieAPI";
import styles from "./OneFilm.module.css";

const OneFilm = ({ film, onClick, date, props }) => (
  <>
    <div className={styles.wrapper}>
      <button className={styles.backBtn} type="button" onClick={onClick}>
        Go back
      </button>
      <div className={styles.aboutFilm}>
        <img
          src={movieAPI.BASE_IMG_URL + film.poster_path}
          alt="Movie poster"
        />
        <div className={styles.info}>
          <h1>
            {film.title} ({date})
          </h1>
          <h3>Overview</h3>
          <p>{film.overview}</p>
          <h3>Genres</h3>
          <p>
            {film.genres.map(genre => (
              <span key={genre.name} className={styles.genre}>
                {genre.name},
              </span>
            ))}
          </p>
        </div>
      </div>
      <div>
        <h3>Additional info</h3>
        <ul>
          <li>
            <Link
              to={{
                pathname: `/movie/${film.id}/cast`,
                state: { ...props.location.state }
              }}
            >
              Actors
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: `/movie/${film.id}/reviews`,
                state: { ...props.location.state }
              }}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </>
);

export default OneFilm;
