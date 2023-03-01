export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <p>Good:{good}</p>
      <p>Neutural:{neutral}</p>
      <p>Bad:{bad}</p>
      <p>
        Total:
        {total}
      </p>
      <p>
        Positive feedback:
        {Math.round(positivePercentage)}%
      </p>
    </div>
  );
};
