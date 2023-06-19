import { Button } from 'components/Button/Button';

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
