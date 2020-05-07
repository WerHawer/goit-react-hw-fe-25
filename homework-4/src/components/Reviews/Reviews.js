import React from "react";
import styles from "./Reviews.module.css";
import ReviewsEl from "./ReviewsEl";

const Reviews = ({ reviews }) => (
  <div className={styles.wrapper}>
    {reviews.length > 0 ? (
      <ul>
        {reviews.map((review) => (
          <ReviewsEl review={review} />
        ))}
      </ul>
    ) : (
      <p>No reviews</p>
    )}
  </div>
);

export default Reviews;
