import React, { Component } from 'react';
import { FeedbackSection } from './Feedback/Section/Section';
import { FeedbackOption } from './Feedback/FeedbackOptions/FeedbackOptions';
import { Statistics } from './Feedback/Statistics/Statistics';
import { NotificationMessage } from './Feedback/NotificationMessage/NotificationMessage';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleFeedbackIncrement = event => {
    const { name } = event.currentTarget;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback() {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  }
  countPositiveFeedbackPercentage() {
    const positiveFeedbackPercent =
      (this.state.good / this.countTotalFeedback()) * 100;
    return positiveFeedbackPercent;
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div
        style={{
          border: '1px solid black',
          borderRadius: '20px',
          margin: 'auto',
          height: 340,
          width: 280,
          padding: 40,
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'teal',
          alignItems: 'left',
          fontSize: 15,
          color: '#fff',
          boxShadow: 'rgb(0 0 0 / 50%) 0px 2px 7px',
        }}
      >
        <FeedbackSection title="Please leave feedback">
          <FeedbackOption
            options={['good', 'neutral', 'bad']}
            onClick={this.handleFeedbackIncrement}
          ></FeedbackOption>
        </FeedbackSection>

        <FeedbackSection title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <NotificationMessage message="There is no feedback"></NotificationMessage>
          )}
        </FeedbackSection>
      </div>
    );
  }
}
