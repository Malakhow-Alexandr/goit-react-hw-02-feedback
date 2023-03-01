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
    if (event.target.name === 'good') {
      this.setState(prevState => ({ good: prevState.good + 1 }));
    }
    if (event.target.name === 'neutral') {
      this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
    }
    if (event.target.name === 'bad') {
      this.setState(prevState => ({ bad: prevState.bad + 1 }));
    }
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
    return (
      <div
        style={{
          padding: 40,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 15,
          color: '#010101',
        }}
      >
        <FeedbackSection title="Please leave feedback">
          <FeedbackOption
            onClick={this.handleFeedbackIncrement}
          ></FeedbackOption>
        </FeedbackSection>

        <FeedbackSection title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
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
