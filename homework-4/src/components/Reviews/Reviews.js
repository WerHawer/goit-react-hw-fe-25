import React from "react";
import styles from "./Reviews.module.css";

const Reviews = ({ reviews }) => (
  <div className={styles.wrapper}>
    {reviews.length > 0 ? (
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <p>
              <b>{review.author}</b>
            </p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    ) : (
      <p>No reviews</p>
    )}
  </div>
);

export default Reviews;
