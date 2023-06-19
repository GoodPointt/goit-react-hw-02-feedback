import { getColorByStat } from 'components/utils/stats';
import css from './Statistics.module.css';

export const Statistics = ({ stats, totalFeedbacks, positivePercentage }) => {
  return (
    <>
      <ul>
        {Object.keys(stats).map(stat => (
          <li className={css.stats__item} key={stat}>
            {stat}:{' '}
            <span style={{ color: getColorByStat(stat) }}>{stats[stat]}</span>
          </li>
        ))}
      </ul>
      <h4>Total feedbacks: {totalFeedbacks}</h4>
      <h4>Positive feedback: {positivePercentage}%</h4>
    </>
  );
};
