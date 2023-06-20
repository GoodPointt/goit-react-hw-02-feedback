export const getColorByStat = stat => {
  switch (stat) {
    case 'good':
      return 'green';
    case 'neutral':
      return 'yellow';
    case 'bad':
      return 'red';
    default:
      return 'black';
  }
};

export const countTotalFeedback = obj =>
  Object.values(obj).reduce((acc, value) => (acc += value), 0);

export const countPositiveFeedbackPercentage = (obj, total) => {
  if (total === 0) return 0;
  return Math.round((obj.good / total) * 100) + '%';
};
