import React, { Component } from "react";
import movieAPI from "../components/movieAPI";
import Reviews from "../components/Reviews";

export default class ReviewsPage extends Component {
  state = { reviews: [] };

  componentDidMount() {
    this.fetchReviews();
  }

  fetchReviews = async () => {
    const filmId = this.props.match.params.movieId;
    const filmReviews = await movieAPI.getReviews(filmId);
    this.setState({ reviews: filmReviews });
  };
  render() {
    const { reviews } = this.state;
    return (
      <>
        <Reviews reviews={reviews} />
      </>
    );
  }
}
