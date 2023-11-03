import React from 'react';
import { Text } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul>
      <li>
        <Text>Good: {good}</Text>
      </li>
      <li>
        <Text>Neutral: {neutral}</Text>
      </li>
      <li>
        <Text>Bad: {bad}</Text>
      </li>
      <li>
        <Text>Total: {total}</Text>
      </li>
      <li>
        <Text>Positive feedback: {Math.ceil(positivePercentage)}%</Text>
      </li>
    </ul>
  );
};
