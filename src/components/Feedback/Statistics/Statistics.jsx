import { Description } from './Statistics.styled';
import PropTypes from 'prop-types';

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

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
