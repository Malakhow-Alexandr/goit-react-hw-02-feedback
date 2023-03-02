import { Description } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <Description>Good: {good}</Description>
      <Description>Neutural: {neutral}</Description>
      <Description>Bad: {bad}</Description>
      <Description>Total: {total}</Description>
      <Description>
        Positive feedback: {Math.round(positivePercentage)}%
      </Description>
    </>
  );
};
