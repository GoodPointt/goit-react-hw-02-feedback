import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

import {
  countPositiveFeedbackPercentage,
  countTotalFeedback,
} from './utils/stats';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementStat = stat =>
    this.setState(prevState => ({ [stat]: prevState[stat] + 1 }));

  render() {
    const totalFeedbacks = countTotalFeedback(this.state);
    const positivePercentage = countPositiveFeedbackPercentage(
      this.state,
      totalFeedbacks
    );

    return (
      <div className="root__div">
        <Section title="Please leave feedback">
          <FeedbackOptions
            incrementStat={this.incrementStat}
            options={this.state}
          />
        </Section>
        <Section title="Statistics">
          {totalFeedbacks ? (
            <Statistics
              stats={this.state}
              totalFeedbacks={totalFeedbacks}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
