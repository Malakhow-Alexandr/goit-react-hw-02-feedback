import PropTypes from 'prop-types';
import { Section, Title } from './Section.styled';

export const FeedbackSection = ({ title, children }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}
      {children}
    </Section>
  );
};

FeedbackSection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
