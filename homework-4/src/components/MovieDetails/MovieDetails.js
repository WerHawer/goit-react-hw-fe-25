import React from "react";
import styles from "./MovieDetails.module.css";

const MovieDetails = ({ onSubmit, onChange, value }) => (
  <form onSubmit={onSubmit} className={styles.searchForm}>
    <input
      type="text"
      value={value}
      onChange={onChange}
      className={styles.input}
      placeholder="find movie"
      autoFocus
    />
    {/* <button type="submit">Search</button> */}
  </form>
);

export default MovieDetails;
