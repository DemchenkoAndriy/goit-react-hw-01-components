import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ title = 'Upload stats', stats }) => (
  <section class={css.statistics}>
    <h2 class={css.title}>{title}</h2>

    <ul class={css.stat_list}>
      {stats.map(({ id, label, percentage }) => (
        <li
          key={id}
          class={css.item}
          style={{ backgroundColor: getRandomHexColor() }}
        >
          <span class={css.label}>{label}</span>
          <span class={css.percentage}>{percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.any,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ).isRequired,
};
