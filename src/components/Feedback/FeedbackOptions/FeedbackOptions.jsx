import PropTypes from 'prop-types';

import { OptionContainer, Button } from './FeedbackOptions.styled';

export const FeedbackOption = ({ options, onClick }) => {
  return (
    <OptionContainer>
      {options.map(option => (
        <Button type="button" name={option} key={option} onClick={onClick}>
          {option[0].toUpperCase() + option.slice(1)}
        </Button>
      ))}
    </OptionContainer>
  );
};

FeedbackOption.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad']))
    .isRequired,
  onClick: PropTypes.func.isRequired,
};
