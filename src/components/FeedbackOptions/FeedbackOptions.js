import React from 'react';
import { Button, List } from './FeedbackOptions.styled';

export const FeedbackOptions = ({options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map(({ name }) => (
        <li key={name}>
          <Button onClick={() => onLeaveFeedback(name)}>{name}</Button>
        </li>
      ))}
    </List>
  );
};
