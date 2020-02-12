import React, { Component } from "react";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import buttonsValue from "../utils/buttonsValue";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";

const btnOptions = Object.values(buttonsValue);

class App extends Component {
  static defaultProps = {
    step: 1
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleAddFeedback = value => {
    this.setState(state => ({ [value]: state[value] + 1 }));
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
        <Section title="Please, leave Feedback">
          <FeedbackOptions
            options={btnOptions}
            onLeaveFeedback={this.handleAddFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            ></Statistics>
          ) : (
            <Notification message="No feedback given"></Notification>
          )}
        </Section>
      </div>
    );
  }
}

export default App;
