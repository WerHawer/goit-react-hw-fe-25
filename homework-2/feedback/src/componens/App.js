import React, { Component } from "react";
import Statistics from "./Statistics/Statistics";

class App extends Component {
  static defaultProps = {
    step: 1
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleAddGoodFedback = () => {
    this.setState(state => ({ good: state.good + 1 }));
  };
  handleAddNeutralFedback = () => {
    this.setState(state => ({ neutral: state.neutral + 1 }));
  };
  handleAddBadFedback = () => {
    this.setState(state => ({ bad: state.bad + 1 }));
  };

  countTotalFeedback = () => {
    const ArrOfFeedbacks = Object.values(this.state);
    const total = ArrOfFeedbacks.reduce((total, point) => total + point, 0);

    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    let percentage = 0;
    if (good) {
      percentage = Math.floor((good / this.countTotalFeedback()) * 100);
    }

    return percentage;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <p>Please, leave Feedback</p>
        <button type="button" onClick={this.handleAddGoodFedback}>
          good
        </button>
        <button type="button" onClick={this.handleAddNeutralFedback}>
          neutral
        </button>
        <button type="button" onClick={this.handleAddBadFedback}>
          bad
        </button>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback}
          positivePercentage={this.countPositiveFeedbackPercentage}
        ></Statistics>
      </div>
    );
  }
}

export default App;
