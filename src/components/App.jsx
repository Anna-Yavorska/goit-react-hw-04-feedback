import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { GlobalStyle } from './GlobalStyle';
import { Statistics } from './Statistics/StatisticsList';
import { Section } from './Section';
import { Notification } from './Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const states = [
    { name: 'good', updateFunction: setGood },
    { name: 'neutral', updateFunction: setNeutral },
    { name: 'bad', updateFunction: setBad },
  ];

  const onUpdate = item => {
    const selectedOptions = states.find(state => state.name === item);
    if (selectedOptions) {
      selectedOptions.updateFunction(prevState => prevState + 1);
    }
  };

  const countTotalFeedback = good + neutral + bad;
  
  const countPositiveFeedbackPercentage = (good / countTotalFeedback) * 100;

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={states} onLeaveFeedback={onUpdate} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
      <GlobalStyle />
    </>
  );
};
