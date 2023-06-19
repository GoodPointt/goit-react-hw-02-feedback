import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { countPositiveFeedbackPercentage } from './utils/stats';
import { countTotalFeedback } from './utils/stats';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  getButtonName = index => Object.keys(this.state)[index];

  incrementStat = stat =>
    this.setState(prevState => ({ [stat]: prevState[stat] + 1 }));

  render() {
    const totalFeedbacks = countTotalFeedback(this.state);
    const positivePercentage = countPositiveFeedbackPercentage(
      this.state,
      totalFeedbacks
    );

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          fontSize: 24,
        }}
      >
        <h2>Please leave feedback</h2>
        <FeedbackOptions
          className="buttons-wrap"
          incrementStat={this.incrementStat}
          options={this.state}
        />

        <h2>Statistics</h2>

        {totalFeedbacks ? (
          <Statistics
            stats={this.state}
            totalFeedbacks={totalFeedbacks}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}
