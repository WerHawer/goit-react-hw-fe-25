import React from "react";

const ReviewsEl = ({ review }) => (
  <li key={review.id}>
    <p>
      <b>{review.author}</b>
    </p>
    <p>{review.content}</p>
  </li>
);

export default ReviewsEl;
