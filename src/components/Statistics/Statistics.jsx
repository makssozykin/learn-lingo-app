import css from './Statistics.module.css';

export const Statistics = () => {
  return (
    <div className={css.statisticsBorder}>
      <div className={css.statistics}>
        <ul className={css.statisticsList}>
          <li className={css.statisticsItem}>
            <h2 className={css.stats}>32,000 +</h2>
            <p className={css.statsText}>Experienced tutors</p>
          </li>
          <li className={css.statisticsItem}>
            <h2 className={css.stats}>300,000 +</h2>
            <p className={css.statsText}>5-star tutor reviews</p>
          </li>
          <li className={css.statisticsItem}>
            <h2 className={css.stats}>120 +</h2>
            <p className={css.statsText}>Subjects taught</p>
          </li>
          <li className={css.statisticsItem}>
            <h2 className={css.stats}>200 +</h2>
            <p className={css.statsText}>Tutor nationalities</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
