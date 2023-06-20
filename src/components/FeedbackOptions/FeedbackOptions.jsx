import { Button } from 'components/Button/Button';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ incrementStat, options }) => {
  return (
    <div className="buttons-wrap">
      {Object.keys(options).map(option => (
        <Button
          buttonType="button"
          key={option}
          onClick={() => incrementStat(option)}
        >
          {option}
        </Button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  incrementStat: PropTypes.func,
  options: PropTypes.objectOf(PropTypes.number).isRequired,
};
