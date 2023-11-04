import React from 'react';
import { Button, List } from './FeedbackOptions.styled';

export const FeedbackOptions = ({options, onLeaveFeedback }) => {
  const buttons = options;
  return (
    <List>
      {buttons.map(item => (
        <li key={item}>
          <Button onClick={() => onLeaveFeedback(item)}>{item}</Button>
        </li>
      ))}
    </List>
  );
};
